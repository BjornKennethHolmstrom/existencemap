<!-- src/routes/map/+page.svelte -->
<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { base } from '$app/paths';
  import { addLangParam } from '$lib/utils/langUrl';
  import { onMount, tick } from 'svelte';
  import { browser } from '$app/environment';
  import { cubicOut } from 'svelte/easing';

  $: t = getTranslation($langStore, 'map');

  // Domain data with color info and descriptions
  const domains = [
    { icon: '🧠', key: 'consciousness', color: 'indigo', darkColor: 'indigo-400' },
    { icon: '🌱', key: 'development', color: 'emerald', darkColor: 'emerald-400' },
    { icon: '💫', key: 'interbeing', color: 'violet', darkColor: 'violet-400' },
    { icon: '♾️', key: 'unknown', color: 'amber', darkColor: 'amber-400' },
    { icon: '🧘', key: 'mysticalStates', color: 'purple', darkColor: 'purple-400' },
    { icon: '🔭', key: 'cosmos', color: 'sky', darkColor: 'sky-400' },
    { icon: '🪞', key: 'reflection', color: 'blue', darkColor: 'blue-400' },
    { icon: '🌀', key: 'spiral', color: 'purple', darkColor: 'purple-400' },
    { icon: '🌺', key: 'feminine', color: 'pink', darkColor: 'pink-400' },
    { icon: '👽', key: 'other', color: 'cyan', darkColor: 'cyan-400' },
    { icon: '🕊️', key: 'beyondReligion', color: 'teal', darkColor: 'teal-400' },
    { icon: '🕰️', key: 'timelessness', color: 'slate', darkColor: 'slate-400' }
  ];
  
  // Function to generate URLs with language parameters
  $: getDomainUrl = (key) => addLangParam(`${base}/map/${key}`, $langStore);

  // Responsive radius calculation - adjust radius based on container size
  let containerWidth = 0;
  let containerHeight = 0;
  let radius = 22;
  let containerElement;
  let mandalaVisible = false;
  let activeDomain = '';

  function updateRadius() {
    if (!browser || !containerElement) return;
    
    // Get current container dimensions
    const rect = containerElement.getBoundingClientRect();
    containerWidth = rect.width;
    containerHeight = rect.height;
    
    // Use the smaller dimension to determine radius
    const minDimension = Math.min(containerWidth, containerHeight);
    
    // Coefficient for spacing
    radius = (minDimension / 2) * 0.8;
    
    // Convert to rem for consistency (assuming 16px base font size)
    radius = radius / 16;
  }

  onMount(async () => {
    if (browser) {
      // First render the container
      await tick();
      
      // Then update radius
      updateRadius();
      
      // Add animation delay
      setTimeout(() => {
        mandalaVisible = true;
      }, 300);
      
      window.addEventListener('resize', updateRadius);
      return () => window.removeEventListener('resize', updateRadius);
    }
  });
  
  // Calculate connection lines between domains
  function getConnectionPath(startIndex, endIndex) {
    if (!browser || domains.length < 2) return '';
    
    const startAngle = startIndex * (360 / domains.length) * (Math.PI / 180);
    const endAngle = endIndex * (360 / domains.length) * (Math.PI / 180);
    
    const centerX = 50;
    const centerY = 50;
    const pathRadius = 40;
    
    const startX = centerX + pathRadius * Math.cos(startAngle);
    const startY = centerY + pathRadius * Math.sin(startAngle);
    const endX = centerX + pathRadius * Math.cos(endAngle);
    const endY = centerY + pathRadius * Math.sin(endAngle);
    
    return `M${startX},${startY} A${pathRadius},${pathRadius} 0 0,1 ${endX},${endY}`;
  }
</script>

<MysticSection className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">
  <MysticParticles />

  <h1 class="text-3xl md:text-4xl font-bold font-display mb-4 text-indigo-400 dark:text-indigo-200">{t.title}</h1>
  <p class="max-w-xl text-indigo-400 dark:text-indigo-300 mb-6 px-4">
    {t.subtitle}
  </p>

  <!-- Mobile Layout: Grid -->
  <div class="md:hidden w-full grid grid-cols-2 gap-4 px-4">
    {#each domains as { icon, key, color }, i}
      <a
        href={getDomainUrl(key)}
        class="transform transition hover:scale-105 cursor-pointer"
      >
        <MysticCard title={t[key]} {color}>
          <div class="text-2xl mb-1">{icon}</div>
        </MysticCard>
      </a>
    {/each}
  </div>
  
  <!-- Desktop Layout: Enhanced Radial Mandala -->
  <div 
    bind:this={containerElement}
    class="hidden md:block relative w-full max-w-7xl h-[38rem] lg:h-[42rem] xl:h-[48rem]"
  >
    <!-- Central logo/mandala -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
      <MysticLogo />
    </div>
    
    <!-- Connection lines (decorative) -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <g class="transition-opacity duration-1000" style="opacity: {mandalaVisible ? 0.2 : 0};">
        <!-- Full circle -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.3" />
        
        <!-- Connective lines -->
        {#each domains as _, i}
          {#each domains as _, j}
            {#if i !== j && (i + 1) % domains.length === j || i === (j + 1) % domains.length}
              <path d={getConnectionPath(i, j)} fill="none" stroke="currentColor" stroke-width="0.2" />
            {/if}
          {/each}
        {/each}
        
        <!-- Radial lines -->
        {#each domains as _, i}
          <line 
            x1="50" 
            y1="50" 
            x2={50 + 45 * Math.cos(i * (360 / domains.length) * (Math.PI / 180))} 
            y2={50 + 45 * Math.sin(i * (360 / domains.length) * (Math.PI / 180))}
            stroke="currentColor"
            stroke-width="0.1"
            opacity="0.3"
          />
        {/each}
      </g>
    </svg>
    
    <!-- Domain cards -->
    {#each domains as { icon, key, color, darkColor }, i}
      <a
        href={getDomainUrl(key)}
        class="absolute transition duration-700 transform hover:scale-105 cursor-pointer"
        style={`
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%) 
                    rotate(${i * (360 / domains.length)}deg) 
                    translateX(${radius}rem) 
                    rotate(-${i * (360 / domains.length)}deg)
                    ${mandalaVisible ? 'scale(1)' : 'scale(0.5)'};
          opacity: ${mandalaVisible ? 1 : 0};
          transition-delay: ${i * 50}ms;
        `}
        on:mouseenter={() => activeDomain = key}
        on:mouseleave={() => activeDomain = ''}
      >
        <MysticCard title={t[key]} color={color}>
          <div class="text-3xl mb-2">{icon}</div>
        </MysticCard>
      </a>
    {/each}
  </div>
</MysticSection>
