<!-- src/lib/components/SpiralDynamicsSvelte.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  
  // Reactive translations
  $: tSpiral = getTranslation($langStore, 'spiral_dynamics');
  
  // Component state
  let activeLevel = 'blue';
  let isExpanded = false;
  let isDarkMode = false;
  
  onMount(() => {
    // Check initial dark mode
    isDarkMode = document.documentElement.classList.contains('dark');
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      isDarkMode = document.documentElement.classList.contains('dark');
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  });
  
  // Spiral Dynamics data with translation keys
  const spiralLevels = [
    {
      id: 'beige',
      color: '#E1CCB1',
      darkColor: '#C6B39A',
      nameKey: 'beigeName',
      themeKey: 'beigeTheme',
      descriptionKey: 'beigeDescription',
      keywordsKey: 'beigeKeywords',
      examplesKey: 'beigeExamples',
      positionKey: 'beigePosition',
      percentage: '0.1%'
    },
    {
      id: 'purple',
      color: '#8E6094',
      darkColor: '#7D5383',
      nameKey: 'purpleName',
      themeKey: 'purpleTheme',
      descriptionKey: 'purpleDescription',
      keywordsKey: 'purpleKeywords',
      examplesKey: 'purpleExamples',
      positionKey: 'purplePosition',
      percentage: '10%'
    },
    {
      id: 'red',
      color: '#C63534',
      darkColor: '#B22D2D',
      nameKey: 'redName',
      themeKey: 'redTheme',
      descriptionKey: 'redDescription',
      keywordsKey: 'redKeywords',
      examplesKey: 'redExamples',
      positionKey: 'redPosition',
      percentage: '20%'
    },
    {
      id: 'blue',
      color: '#2A4B9B',
      darkColor: '#234083',
      nameKey: 'blueName',
      themeKey: 'blueTheme',
      descriptionKey: 'blueDescription',
      keywordsKey: 'blueKeywords',
      examplesKey: 'blueExamples',
      positionKey: 'bluePosition',
      percentage: '40%'
    },
    {
      id: 'orange',
      color: '#EB8221',
      darkColor: '#D4741D',
      nameKey: 'orangeName',
      themeKey: 'orangeTheme',
      descriptionKey: 'orangeDescription',
      keywordsKey: 'orangeKeywords',
      examplesKey: 'orangeExamples',
      positionKey: 'orangePosition',
      percentage: '30%'
    },
    {
      id: 'green',
      color: '#69A943',
      darkColor: '#5C943B',
      nameKey: 'greenName',
      themeKey: 'greenTheme',
      descriptionKey: 'greenDescription',
      keywordsKey: 'greenKeywords',
      examplesKey: 'greenExamples',
      positionKey: 'greenPosition',
      percentage: '10%'
    },
    {
      id: 'yellow',
      color: '#F4D53F',
      darkColor: '#E5C639',
      nameKey: 'yellowName',
      themeKey: 'yellowTheme',
      descriptionKey: 'yellowDescription',
      keywordsKey: 'yellowKeywords',
      examplesKey: 'yellowExamples',
      positionKey: 'yellowPosition',
      percentage: '1%'
    },
    {
      id: 'turquoise',
      color: '#51C4BF',
      darkColor: '#47B0AC',
      nameKey: 'turquoiseName',
      themeKey: 'turquoiseTheme',
      descriptionKey: 'turquoiseDescription',
      keywordsKey: 'turquoiseKeywords',
      examplesKey: 'turquoiseExamples',
      positionKey: 'turquoisePosition',
      percentage: '0.1%'
    },
    {
      id: 'coral',
      color: '#FA8072',
      darkColor: '#E57364',
      nameKey: 'coralName',
      themeKey: 'coralTheme',
      descriptionKey: 'coralDescription',
      keywordsKey: 'coralKeywords',
      examplesKey: 'coralExamples',
      positionKey: 'coralPosition',
      percentage: '0.01%'
    }
  ];
  
  $: activeLevelData = spiralLevels.find(level => level.id === activeLevel);
  
  // Helper function to get array from translation
  function getArrayFromTranslation(key) {
    if (!tSpiral || !tSpiral[key]) return [];
    return Array.isArray(tSpiral[key]) ? tSpiral[key] : [tSpiral[key]];
  }
</script>

<div class="w-full max-w-4xl mx-auto my-12 bg-white dark:bg-indigo-900/30 rounded-xl shadow-lg overflow-hidden">
  <div class="p-6 border-b border-gray-200 dark:border-indigo-800">
    <h3 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
      {tSpiral?.title || 'Spiral Dynamics: Interactive Exploration'}
    </h3>
    <p class="text-gray-700 dark:text-gray-300">
      {tSpiral?.subtitle || 'Explore the different stages of consciousness development according to the Spiral Dynamics model. Click on a color to learn more about each stage.'}
    </p>
  </div>
  
  <!-- Spiral Visualization -->
  <div class="flex flex-wrap justify-center p-6 gap-3 bg-gray-50 dark:bg-indigo-950/50">
    {#each spiralLevels as level}
      <button
        class={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center border-2 
          ${activeLevel === level.id 
            ? 'transform scale-125 shadow-lg border-white dark:border-gray-700' 
            : 'opacity-80 hover:opacity-100 border-transparent'}`}
        style={`background-color: ${isDarkMode ? level.darkColor : level.color};`}
        on:click={() => activeLevel = level.id}
        aria-label={tSpiral?.[level.nameKey] || level.id}
      >
        {#if activeLevel === level.id}
          <span class="sr-only">(Selected)</span>
        {/if}
      </button>
    {/each}
  </div>
  
  <!-- Active Level Details -->
  {#if activeLevelData && tSpiral}
    <div class="p-6">
      <div class="flex items-center mb-4">
        <div 
          class="w-8 h-8 rounded-full mr-3" 
          style={`background-color: ${isDarkMode ? activeLevelData.darkColor : activeLevelData.color};`}
        ></div>
        <h4 class="text-xl font-bold">
          {tSpiral[activeLevelData.nameKey] || activeLevelData.id}: 
          <span class="font-normal">{tSpiral[activeLevelData.themeKey] || ''}</span>
        </h4>
        <div class="ml-auto text-xs bg-gray-100 dark:bg-indigo-800 px-2 py-1 rounded-full">
          ~{activeLevelData.percentage} {tSpiral?.populationLabel || 'of population'}
        </div>
      </div>
      
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        {tSpiral[activeLevelData.descriptionKey] || ''}
      </p>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-gray-50 dark:bg-indigo-900/40 p-4 rounded-lg">
          <h5 class="font-bold mb-2 text-sm text-gray-500 dark:text-gray-400">
            {tSpiral?.characteristicsLabel || 'KEY CHARACTERISTICS'}
          </h5>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            {#each getArrayFromTranslation(activeLevelData.keywordsKey) as keyword}
              <li>{keyword}</li>
            {/each}
          </ul>
        </div>
        
        <div class="bg-gray-50 dark:bg-indigo-900/40 p-4 rounded-lg">
          <h5 class="font-bold mb-2 text-sm text-gray-500 dark:text-gray-400">
            {tSpiral?.examplesLabel || 'EXAMPLES'}
          </h5>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
            {#each getArrayFromTranslation(activeLevelData.examplesKey) as example}
              <li>{example}</li>
            {/each}
          </ul>
        </div>
      </div>
      
      {#if isExpanded}
        <div class="mt-4 bg-gray-50 dark:bg-indigo-900/40 p-4 rounded-lg">
          <h5 class="font-bold mb-2 text-sm text-gray-500 dark:text-gray-400">
            {tSpiral?.positionLabel || 'POSITION IN SPIRAL'}
          </h5>
          <p class="text-gray-700 dark:text-gray-300">
            {tSpiral[activeLevelData.positionKey] || ''}
          </p>
        </div>
      {/if}
      
      <button 
        class="mt-4 text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
        on:click={() => isExpanded = !isExpanded}
      >
        {isExpanded 
          ? (tSpiral?.showLess || 'Show less') 
          : (tSpiral?.learnMore || 'Learn more about this stage')}
        <span class={`ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
      </button>
    </div>
  {/if}
  
  <div class="p-4 bg-gray-50 dark:bg-indigo-950/50 text-xs text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-indigo-800">
    {tSpiral?.attribution || 'Based on the work of Clare W. Graves, Don Beck, and Christopher Cowan.'} 
    <br />
    {tSpiral?.disclaimer || 'This is a simplified model for educational purposes.'}
  </div>
</div>
