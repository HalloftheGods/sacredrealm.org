---
title: The Nexus
description: The central command hub and intersection of community operations.
---

::hud-grid
  ::hud-panel{id="core-systems" title="Core Systems" status="nominal" icon="i-lucide-cpu"}
    Welcome to the **Nexus**. This is the crossroads where ideas crystallize into form. All primary network nodes are responsive and synchronous.
    
    ::hud-metric{label="Resilience" value="99.9" unit="%" trend="up"}
    ::
  ::
  
  ::hud-panel{id="comms-array" title="Comms Array" status="nominal" icon="i-lucide-activity"}
    Live data synchronization in progress. Scanning local sub-nodes for capability resonance.
    
    ::data-feed{:speed="1500" :lines="5"}
    ::
  ::
::

::runic-divider{label="Node Topography" icon="i-lucide-network"}
::

::hud-grid
  ::hud-panel{id="database-link" title="Database Link" status="nominal" icon="i-lucide-database"}
    Connecting to Sacred Hall Archives...
    - :doctrine-badge{label="Active" icon="i-lucide-radio" to="https://discord.gg/tnUYAJbJuH"} **Comms Relay**
    - :doctrine-badge{label="Synched" icon="i-lucide-check-circle" to="https://triforceofthegods.com"} **Data Archive**
    - :doctrine-badge{label="Online" icon="i-lucide-anvil" to="https://glowitheflow.com"} **Construct Forge**
  ::
  
  ::hud-panel{id="security-sector" title="Security Sector" status="warning" icon="i-lucide-shield"}
    Access restricted. Prove your capability to enter internal networks.
    
    *Establish secure connection when ready.*
    
    ::hud-metric{label="Threat Level" value="LOW" trend="stable"}
    ::
  ::
::
