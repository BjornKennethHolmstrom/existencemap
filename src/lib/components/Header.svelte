<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { getRoute, addLangToRoute } from '$lib/utils/hashRoutes';
  import { getArticles } from '$lib/data/articles';

  // Create an optimized version of the map items that we'll use
  const mapItems = [
    { path: 'map/consciousness', emoji: '🧠', key: 'consciousness' },
    { path: 'map/development', emoji: '🌱', key: 'development' },
    { path: 'map/mysticalStates', emoji: '🧘', key: 'mysticalStates' },
    { path: 'map/interbeing', emoji: '💫', key: 'interbeing' },
    { path: 'map/cosmos', emoji: '🔭', key: 'cosmos' },
    { path: 'map/unknown', emoji: '♾️', key: 'unknown' },
    { path: 'map/reflection', emoji: '🪞', key: 'reflection' },
    { path: 'map/spiral', emoji: '🌀', key: 'spiral' },
    { path: 'map/feminine', emoji: '🌺', key: 'feminine' },
    { path: 'map/other', emoji: '👽', key: 'other' },
    { path: 'map/beyondReligion', emoji: '🕊️', key: 'beyondReligion' },
    { path: 'map/timelessness', emoji: '🕰️', key: 'timelessness' }
  ];

  const mainNavItems = [
    { path: 'map', emoji: '🗺️', key: 'map', hasSubmenu: true },
    { path: 'articles', emoji: '📝', key: 'articles', hasSubmenu: true }, // Changed to hasSubmenu: true
    { path: 'contact', emoji: '✉️', key: 'contact', hasSubmenu: false },
    { path: 'about', emoji: '📖', key: 'about', hasSubmenu: false },
    { path: 'credits', emoji: '🌟', key: 'credits', hasSubmenu: false }
  ];
  
  // Use a non-reactive variable for translations - we'll update it manually when needed
  let t;
  $: { 
    t = getTranslation($langStore, 'common');
  }

  // Get articles for dropdown
  $: articles = getArticles($langStore);

  let isDark = true;
  let mapOpen = false;
  let articlesOpen = false; // New state for articles dropdown
  let mobileMenuOpen = false;

  // Precompute some URLs for better performance
  let homeUrl, mapUrl, articlesUrl, contactUrl, aboutUrl, creditsUrl;
  $: {
    homeUrl = addLangToRoute(getRoute(''), $langStore);
    mapUrl = addLangToRoute(getRoute('map'), $langStore);
    articlesUrl = addLangToRoute(getRoute('articles'), $langStore);
    contactUrl = addLangToRoute(getRoute('contact'), $langStore);
    aboutUrl = addLangToRoute(getRoute('about'), $langStore);
    creditsUrl = addLangToRoute(getRoute('credits'), $langStore);
  }

  // Cache map item URLs (only recomputed when language changes)
  let mapItemUrls = [];
  $: {
    mapItemUrls = mapItems.map(item => ({
      ...item,
      url: addLangToRoute(getRoute(item.path), $langStore)
    }));
  }

  // Generate article URLs
  $: articleUrls = articles.map(article => ({
    ...article,
    url: addLangToRoute(getRoute(`articles/${article.slug}`), $langStore)
  }));

  // Safe theme check and application on mount
  onMount(() => {
    if (!browser) return;

    const savedTheme = localStorage.getItem('theme');
    isDark = savedTheme === 'dark' || savedTheme === null;

    document.documentElement.classList.toggle('dark', isDark);
  });

  function toggleMapMenu() {
    mapOpen = !mapOpen;
    if (mapOpen) articlesOpen = false; // Close articles if map opens
  }

  function toggleArticlesMenu() {
    articlesOpen = !articlesOpen;
    if (articlesOpen) mapOpen = false; // Close map if articles opens
  }

  function closeMapMenu() {
    mapOpen = false;
  }

  function closeArticlesMenu() {
    articlesOpen = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    // If closing the mobile menu, also close any open submenus
    if (!mobileMenuOpen) {
      mapOpen = false;
      articlesOpen = false;
    }
  }

  function toggleTheme() {
    if (!browser) return;

    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Handle language change with URL parameter update
  function handleLanguageChange(event) {
    const newLang = event.target.value;
    langStore.set(newLang);
    
    // Update URL with the language parameter
    if (browser) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      
      // Use history.pushState to avoid full page reload
      history.pushState({}, '', url.toString());
    }
  }
</script>

<header class="sticky top-0 w-full py-4 px-4 md:px-6 flex items-center justify-between text-sm font-semibold tracking-wide text-indigo-900 dark:text-indigo-100 z-50 bg-white/90 dark:bg-indigo-950/90 backdrop-blur-sm shadow-sm">
  <!-- Logo (always visible) -->
  <a href={homeUrl} class="text-lg font-bold hover:text-violet-600 transition">🌌 Existencemap</a>

  <!-- Desktop Navigation -->
  <div class="hidden md:flex items-center space-x-6">
    <nav class="flex items-center space-x-6">
      <!-- Map Dropdown -->
      <div
        class="relative group inline-block"
        on:mouseenter={() => mapOpen = true}
        on:mouseleave={() => mapOpen = false}
      >
        <!-- Map Link - Changed to navigate when clicked -->
        <a
          href={mapUrl}
          class="font-bold hover:text-violet-500 transition block px-2 py-2"
          aria-haspopup="true"
          aria-expanded={mapOpen}
        >
          🗺️ {t.map}
        </a>

        <!-- Map Dropdown Menu -->
        <div
          class={`absolute left-0 top-full bg-white dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded shadow-lg p-2 transform transition-all duration-300 ease-out z-50 w-max
            ${mapOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
        >
          {#each mapItemUrls as { url, emoji, key }}
            <a
              href={url}
              class="block px-4 py-1 whitespace-nowrap hover:bg-indigo-50 dark:hover:bg-indigo-800 hover:shadow-md hover:shadow-violet-300/30 dark:hover:shadow-violet-500/20 rounded text-sm transition"
              on:click={() => mapOpen = false}
            >
              {emoji} {t[key] ?? key}
            </a>
          {/each}
        </div>
      </div>

      <!-- Articles Dropdown (New) -->
      <div
        class="relative group inline-block"
        on:mouseenter={() => articlesOpen = true}
        on:mouseleave={() => articlesOpen = false}
      >
        <!-- Articles Link -->
        <a
          href={articlesUrl}
          class="font-bold hover:text-violet-500 transition block px-2 py-2"
          aria-haspopup="true"
          aria-expanded={articlesOpen}
        >
          📝 {t.articles || 'Articles'}
        </a>

        <!-- Articles Dropdown Menu -->
        <div
          class={`absolute left-0 top-full bg-white dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded shadow-lg p-2 transform transition-all duration-300 ease-out z-50 w-[22rem] max-h-[80vh] overflow-y-auto
            ${articlesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
        >
          {#each articleUrls as { url, emoji, title, subtitle, domain, slug }}
            <a
              href={url}
              class="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-800 hover:shadow-md hover:shadow-violet-300/30 dark:hover:shadow-violet-500/20 rounded text-sm transition mb-2"
              on:click={() => articlesOpen = false}
            >
              <div class="flex gap-2 items-start">
                <span class="text-lg mt-0.5">{emoji || '📄'}</span>
                <div>
                  <div class="font-medium">{title}</div>
                  {#if subtitle}
                    <div class="text-xs text-indigo-600 dark:text-indigo-400 italic">{subtitle}</div>
                  {/if}
                  {#if domain && t[domain]}
                    <div class="text-xs text-violet-500 dark:text-violet-400 mt-1">{t[domain]}</div>
                  {/if}
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <!-- Other Desktop Nav Links -->
      <a href={contactUrl} class="font-bold hover:text-violet-500 transition">✉️ {t.contact || 'Contact'}</a>
      <a href={aboutUrl} class="font-bold hover:text-violet-500 transition">📖 {t.about}</a>
      <a href={creditsUrl} class="font-bold hover:text-violet-500 transition">🌟 {t.credits}</a>
    </nav>

    <!-- Language Selector -->
    <select
      class="bg-transparent border border-indigo-300 dark:border-indigo-600 rounded px-3 py-1 pr-7 text-sm text-indigo-700 dark:text-indigo-100 hover:border-violet-500 transition min-w-[8.5rem]"
      value={$langStore}
      on:change={handleLanguageChange}
    >
      <option value="en">🇬🇧 English</option>
      <option value="sv">🇸🇪 Svenska</option>
    </select>

    <!-- Theme Toggle (Desktop) -->
    <button
      class="text-xl hover:text-violet-500 transition"
      on:click={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  </div>

  <!-- Mobile Menu Button -->
  <div class="flex items-center space-x-4 md:hidden">
    <!-- Theme Toggle (Mobile) -->
    <button
      class="text-xl hover:text-violet-500 transition p-2"
      on:click={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
    
    <!-- Hamburger Icon -->
    <button 
      class="p-2 focus:outline-none" 
      on:click={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      <div class="relative w-6 h-5">
        <span 
          class={`absolute block h-0.5 w-6 bg-indigo-900 dark:bg-indigo-100 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}
        ></span>
        <span 
          class={`absolute block h-0.5 bg-indigo-900 dark:bg-indigo-100 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-6 top-2'}`}
        ></span>
        <span 
          class={`absolute block h-0.5 w-6 bg-indigo-900 dark:bg-indigo-100 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}
        ></span>
      </div>
    </button>
  </div>
</header>

<!-- Mobile Menu Overlay - Only render when needed -->
{#if mobileMenuOpen}
  <div 
    transition:slide={{ duration: 300, easing: quintOut }}
    class="fixed inset-0 z-40 bg-white dark:bg-indigo-950 pt-16 pb-6 px-6 flex flex-col md:hidden"
  >
    <nav class="flex flex-col space-y-4 flex-1 overflow-y-auto">
      <!-- Mobile Nav Items -->
      {#each mainNavItems as { path, emoji, key, hasSubmenu }}
        {#if hasSubmenu && key === 'map'}
          <!-- Map with Submenu -->
          <div class="border-b border-indigo-100 dark:border-indigo-800 pb-2">
            <div class="flex justify-between items-center">
              <!-- Map link - will navigate to map page -->
              <a 
                href={mapUrl} 
                class="font-bold py-2 hover:text-violet-500 transition"
                on:click={() => mobileMenuOpen = false}
              >
                {emoji} {t[key]}
              </a>
              
              <!-- Separate toggle button for submenu -->
              <button 
                class="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-800 rounded"
                on:click={() => { mapOpen = !mapOpen; articlesOpen = false; }}
                aria-label="Toggle submenu"
              >
                <span class="transform transition-transform duration-200 inline-block {mapOpen ? 'rotate-180' : ''}">
                  ▼
                </span>
              </button>
            </div>
            
            {#if mapOpen}
              <div class="pl-4 py-2 space-y-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mt-2">
                {#each mapItemUrls as { url, emoji, key }}
                  <a 
                    href={url} 
                    class="block py-2 hover:text-violet-500 transition"
                    on:click={() => { mobileMenuOpen = false; mapOpen = false; }}
                  >
                    {emoji} {t[key] ?? key}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else if hasSubmenu && key === 'articles'}
          <!-- Articles with Submenu -->
          <div class="border-b border-indigo-100 dark:border-indigo-800 pb-2">
            <div class="flex justify-between items-center">
              <!-- Articles link -->
              <a 
                href={articlesUrl} 
                class="font-bold py-2 hover:text-violet-500 transition"
                on:click={() => mobileMenuOpen = false}
              >
                {emoji} {t[key]}
              </a>
              
              <!-- Separate toggle button for submenu -->
              <button 
                class="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-800 rounded"
                on:click={() => { articlesOpen = !articlesOpen; mapOpen = false; }}
                aria-label="Toggle article submenu"
              >
                <span class="transform transition-transform duration-200 inline-block {articlesOpen ? 'rotate-180' : ''}">
                  ▼
                </span>
              </button>
            </div>
            
            {#if articlesOpen}
              <div class="pl-4 py-2 space-y-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mt-2">
                {#each articleUrls.slice(0, 6) as { url, emoji, title, slug }}
                  <a 
                    href={url} 
                    class="block py-2 hover:text-violet-500 transition"
                    on:click={() => { mobileMenuOpen = false; articlesOpen = false; }}
                  >
                    {emoji || '📄'} {title}
                  </a>
                {/each}
                {#if articleUrls.length > 6}
                  <a 
                    href={articlesUrl} 
                    class="block py-2 text-indigo-500 hover:text-violet-500 italic transition"
                    on:click={() => { mobileMenuOpen = false; articlesOpen = false; }}
                  >
                    View all articles...
                  </a>
                {/if}
              </div>
            {/if}
          </div>
        {:else}
          <!-- Regular Nav Item -->
          <a 
            href={
              key === 'articles' ? articlesUrl : 
              key === 'contact' ? contactUrl :
              key === 'about' ? aboutUrl : 
              creditsUrl
            } 
            class="block font-bold py-2 border-b border-indigo-100 dark:border-indigo-800 hover:text-violet-500 transition"
            on:click={() => mobileMenuOpen = false}
          >
            {emoji} {t[key]}
          </a>
        {/if}
      {/each}
    </nav>
    
    <!-- Mobile Language Selector -->
    <div class="pt-4 border-t border-indigo-100 dark:border-indigo-800 mt-4">
      <label class="block text-sm mb-2">{$langStore === 'sv' ? 'Välj språk' : 'Select language'}</label>
      <select
        class="w-full bg-white dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-600 rounded px-3 py-2 text-indigo-700 dark:text-indigo-100"
        value={$langStore}
        on:change={(e) => { handleLanguageChange(e); mobileMenuOpen = false; }}
      >
        <option value="en">🇬🇧 English</option>
        <option value="sv">🇸🇪 Svenska</option>
      </select>
    </div>
  </div>
{/if}
