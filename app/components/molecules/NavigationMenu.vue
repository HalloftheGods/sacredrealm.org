<script setup lang="ts">
import { ref } from 'vue'

const is7x7Open = ref(true)
</script>

<template>
  <ContainerBox
    tag="nav"
    class="flex flex-col gap-1 text-xs tracking-[0.2em] font-mono text-grimoire-gold/60 uppercase"
  >
    <NavActionLink to="/">Daily Doctrine</NavActionLink>
    <NavActionLink to="/manifesto">Manifesto</NavActionLink>
    <NavActionLink to="/about">About</NavActionLink>

    <div class="h-px bg-grimoire-gold/10 my-2 mx-2"></div>

    <NavDropdownToggle
      :is-open="is7x7Open"
      @click="is7x7Open = !is7x7Open"
    >
      7x7 Lexicon
    </NavDropdownToggle>

    <div
      v-show="is7x7Open"
      class="flex flex-col gap-1 overflow-hidden transition-all duration-300"
    >
      <NavSubLink
        to="/metals"
        color-theme="red"
      >
        7 Core Metals
      </NavSubLink>
      <NavSubLink
        to="/crystals"
        color-theme="orange"
      >
        7 Sacred Crystals
      </NavSubLink>
      <NavSubLink
        to="/chakras"
        color-theme="yellow"
      >
        7 Internal Wheels
      </NavSubLink>
      <NavSubLink
        to="/days"
        color-theme="green"
      >
        7 Celestial Days
      </NavSubLink>
      <NavSubLink
        to="/keys"
        color-theme="blue"
      >
        7 Harmonious Keys
      </NavSubLink>
      <NavSubLink
        to="/frequencies"
        color-theme="indigo"
      >
        7 Frequency Waves
      </NavSubLink>
      <NavSubLink
        to="/sages"
        color-theme="violet"
      >
        7 Subliminal Sages
      </NavSubLink>
    </div>



    <div class="flex flex-col gap-2 mt-6">
      <ActionLink 
        to="https://triforceofthegods.com" 
        target="_blank"
        class="group flex items-center justify-between gap-3 py-2 px-3 border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-500/40 rounded-lg transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] cursor-pointer"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div class="flex items-center gap-3 relative z-10">
          <UIcon name="i-lucide-triangle" class="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300" />
          <span class="font-mono font-bold tracking-[0.2em] text-[10px] uppercase group-hover:translate-x-1 transition-transform duration-300 text-amber-500 group-hover:text-amber-400">Triforce of the Gods</span>
        </div>

        <UIcon name="i-lucide-external-link" class="w-3 h-3 text-amber-500/50 group-hover:text-amber-400 transition-colors duration-300 relative z-10" />
      </ActionLink>

      <ActionLink 
        to="https://discord.gg/tnUYAJbJuH" 
        target="_blank"
        class="group flex items-center justify-between gap-3 py-2 px-3 border border-[#5865F2]/20 bg-[#5865F2]/5 hover:bg-[#5865F2]/10 hover:border-[#5865F2]/40 rounded-lg transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_15px_rgba(88,101,242,0.15)] cursor-pointer"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#5865F2]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div class="flex items-center gap-3 relative z-10">
          <UIcon name="i-simple-icons-discord" class="w-3.5 h-3.5 text-[#5865F2] group-hover:text-[#5865F2] drop-shadow-[0_0_8px_rgba(88,101,242,0.8)] transition-all duration-300" />
          <span class="font-mono font-bold tracking-[0.2em] text-[10px] uppercase group-hover:translate-x-1 transition-transform duration-300 text-[#5865F2] group-hover:text-[#5865F2]">Join Discord</span>
        </div>

        <UIcon name="i-lucide-external-link" class="w-3 h-3 text-[#5865F2]/50 group-hover:text-[#5865F2] transition-colors duration-300 relative z-10" />
      </ActionLink>
    </div>
  </ContainerBox>
</template>
