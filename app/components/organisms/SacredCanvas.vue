<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number

const ROYGBIV_COLORS = [
  '255, 59, 48',    // Red
  '255, 149, 0',    // Orange
  '255, 204, 0',    // Yellow
  '52, 199, 89',    // Green
  '0, 122, 255',    // Blue
  '88, 86, 214',    // Indigo
  '175, 82, 222'    // Violet
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  angle: number
  speed: number
  color: string
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height

  const handleResize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }
  
  let targetMouseX = width / 2
  let targetMouseY = height / 2
  let mouseX = width / 2
  let mouseY = height / 2

  const handleMouseMove = (e: MouseEvent) => {
    targetMouseX = e.clientX
    targetMouseY = e.clientY
  }

  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)

  let time = 0
  const particles: Particle[] = []
  
  // init particles - density based on screen size
  const numParticles = Math.min(150, Math.floor((width * height) / 20000)) 
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: 1.0 + Math.random() * 3.5,
      baseAlpha: 0.15 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.45,
      color: ROYGBIV_COLORS[Math.floor(Math.random() * ROYGBIV_COLORS.length)]!
    })
  }

  const drawSacredGeometry = (cx: number, cy: number, radius: number, time: number) => {
    ctx.save()
    
    // Slight parallax based on mouse
    const parallaxX = (mouseX - width / 2) * 0.05
    const parallaxY = (mouseY - height / 2) * 0.05
    
    ctx.translate(cx + parallaxX, cy + parallaxY)
    
    // Base rotation
    ctx.rotate(time * 0.15)

    // Outer glow settings
    ctx.shadowBlur = 25
    ctx.shadowColor = 'rgba(197, 160, 89, 0.4)'

    const rings = 8
    for(let r = 1; r <= rings; r++) {
      // Dynamic ring radius that breathes
      const ringRadius = radius * (r / rings) + Math.sin(time + r) * 15
      
      // Draw ring
      ctx.beginPath()
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(197, 160, 89, ${0.03 + (0.04 * (r/rings))})`
      ctx.lineWidth = 1 + (r === rings ? 1 : 0) // Thicker outer ring
      ctx.stroke()

      // Orbiting nodes
      const numNodes = r * 8
      for(let n = 0; n < numNodes; n++) {
        // Alternating rotation directions for rings
        const dir = r % 2 === 0 ? 1 : -1
        const nodeAngle = (Math.PI * 2 / numNodes) * n + (time * 0.15 * dir)
        
        const nx = Math.cos(nodeAngle) * ringRadius
        const ny = Math.sin(nodeAngle) * ringRadius
        
        ctx.beginPath()
        ctx.arc(nx, ny, 1.5 + (r === rings ? 1 : 0), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(197, 160, 89, ${0.2 + Math.abs(Math.sin(time * 2 + n)) * 0.3})`
        ctx.fill()

        // Geometric connections between rings
        if (r > 1) {
          const prevDir = (r - 1) % 2 === 0 ? 1 : -1
          const innerRingRadius = radius * ((r-1) / rings) + Math.sin(time + r - 1) * 15
          // Connect to matching node on inner ring
          const innerAngle = (Math.PI * 2 / ((r-1)*8)) * Math.floor((n / numNodes) * ((r-1)*8)) + (time * 0.15 * prevDir)
          
          const inx = Math.cos(innerAngle) * innerRingRadius
          const iny = Math.sin(innerAngle) * innerRingRadius

          ctx.beginPath()
          ctx.moveTo(nx, ny)
          ctx.lineTo(inx, iny)
          ctx.strokeStyle = `rgba(197, 160, 89, 0.05)`
          ctx.lineWidth = 1.0
          ctx.stroke()
        }
      }
    }

    // Sacred center crest/star
    ctx.rotate(-time * 0.3) // counter rotate the center
    const points = 12
    ctx.beginPath()
    for(let i = 0; i < points * 2; i++) {
        const r2 = i % 2 === 0 ? radius * 0.3 : radius * 0.1
        const a = (Math.PI / points) * i
        if (i === 0) ctx.moveTo(Math.cos(a) * r2, Math.sin(a) * r2)
        else ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2)
    }
    ctx.closePath()
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.2)'
    ctx.stroke()

    ctx.restore()
  }

  const drawParticlesAndConnections = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const connectionDistance = 230

    const connectionDistanceSq = connectionDistance * connectionDistance

    particles.forEach((p, i) => {
      // Flowing movement
      p.angle += (Math.random() - 0.5) * 0.05
      
      // Target velocity
      let tvx = Math.cos(p.angle) * p.speed
      let tvy = Math.sin(p.angle) * p.speed

      // Mouse interaction - gentle repulsion
      const mdx = mouseX - p.x
      const mdy = mouseY - p.y
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
      
      if (mdist < 250) {
        const force = (250 - mdist) / 250
        tvx -= (mdx / mdist) * force * 0.02
        tvy -= (mdy / mdist) * force * 0.02
      }

      // Smooth velocity
      p.vx += (tvx - p.vx) * 0.1
      p.vy += (tvy - p.vy) * 0.1
      
      p.x += p.vx
      p.y += p.vy

      // Wrap around edges gracefully
      if (p.x < -10) p.x = width + 10
      if (p.x > width + 10) p.x = -10
      if (p.y < -10) p.y = height + 10
      if (p.y > height + 10) p.y = -10

      // Draw particle glow
      const pulseAlpha = p.baseAlpha + Math.sin(time * 3 + i) * 0.3
      const finalAlpha = Math.max(0.1, Math.min(1, pulseAlpha))
      
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.color}, ${finalAlpha})`
      ctx.fill()

      // Connect with nearby particles for web effect
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        if (!p2) continue
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const distSq = dx * dx + dy * dy

        if (distSq < connectionDistanceSq) {
          const dist = Math.sqrt(distSq)
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          const lineAlpha = (1 - (dist / connectionDistance)) * 0.25
          
          const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y)
          gradient.addColorStop(0, `rgba(${p.color}, ${lineAlpha})`)
          gradient.addColorStop(1, `rgba(${p2.color}, ${lineAlpha})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.0
          ctx.stroke()
        }
      }
    })
  }

  const animate = () => {
    // Semi-transparent clear for subtle trail effects (if desired, though clearRect is crisper)
    ctx.clearRect(0, 0, width, height)
    
    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.1
    mouseY += (targetMouseY - mouseY) * 0.1
    
    time += 0.01

    const cx = width / 2
    const cy = height / 2
    // Responsive geometry size
    const maxGeometryRadius = Math.min(width, height) * 0.35

    drawSacredGeometry(cx, cy, maxGeometryRadius, time)
    drawParticlesAndConnections(ctx, width, height, time)

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(animationFrameId)
  }
}

onMounted(() => {
  const cleanup = initCanvas()
  onBeforeUnmount(() => {
    if (cleanup) cleanup()
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="w-full h-full block" />
</template>
