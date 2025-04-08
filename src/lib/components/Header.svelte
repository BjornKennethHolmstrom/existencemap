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

  $: t = getTranslation($langStore, 'common');

  let isDark = true;
  let mapOpen = false;
  let mobileMenuOpen = false;

  // Safe theme check and application on mount
  onMount(() => {
    if (!browser) return;

    const savedTheme = localStorage.getItem('theme');
    isDark = savedTheme === 'dark' || savedTheme === null;

    document.documentElement.classList.toggle('dark', isDark);
  });

  function toggleMapMenu() {
    mapOpen = !mapOpen;
  }

  function closeMapMenu() {
    mapOpen = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    // If closing the mobile menu, also close any open submenus
    if (!mobileMenuOpen) {
      mapOpen = false;
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

  const mapItems = [
    { href: `${base}/map/consciousness`, emoji: '🧠', key: 'consciousness' },
    { href: `${base}/map/development`, emoji: '🌱', key: 'development' },
    { href: `${base}/map/mysticalStates`, emoji: '🧘', key: 'mysticalStates' },
    { href: `${base}/map/interbeing`, emoji: '💫', key: 'interbeing' },
    { href: `${base}/map/cosmos`, emoji: '🔭', key: 'cosmos' },
    { href: `${base}/map/unknown`, emoji: '♾️', key: 'unknown' },
    { href: `${base}/map/reflection`, emoji: '🪞', key: 'reflection' },
    { href: `${base}/map/spiral`, emoji: '🌀', key: 'spiral' }
  ];

  const mainNavItems = [
    { href: `${base}/map`, emoji: '🗺️', key: 'map', hasSubmenu: true },
    { href: `${base}/articles`, emoji: '📝', key: 'articles', hasSubmenu: false },
    { href: `${base}/about`, emoji: '📖', key: 'about', hasSubmenu: false },
    { href: `${base}/credits`, emoji: '🌟', key: 'credits', hasSubmenu: false }
  ];
</script>

<header class="sticky top-0 w-full py-4 px-4 md:px-6 flex items-center justify-between text-sm font-semibold tracking-wide text-indigo-900 dark:text-indigo-100 z-50 bg-white/90 dark:bg-indigo-950/90 backdrop-blur-sm shadow-sm">
  <!-- Logo (always visible) -->
  <a href="{base}/" class="text-lg font-bold hover:text-violet-600 transition">🌌 Existencemap</a>

  <!-- Desktop Navigation -->
  <div class="hidden md:flex items-center space-x-6">
    <nav class="flex items-center space-x-6">
      <!-- Map Dropdown -->
      <div
        class="relative group inline-block"
        on:mouseenter={() => mapOpen = true}
        on:mouseleave={() => mapOpen = false}
      >
        <!-- Map Link -->
        <a
          href="{base}/map"
          class="font-bold hover:text-violet-500 transition block px-2 py-2"
          aria-haspopup="true"
          aria-expanded={mapOpen}
          on:click={(e) => { e.preventDefault(); mapOpen = !mapOpen; }}
        >
          🗺️ {t.map}
        </a>

        <!-- Map Dropdown Menu -->
        <div
          class={`absolute left-0 top-full bg-white dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded shadow-lg p-2 transform transition-all duration-300 ease-out z-50 w-max
            ${mapOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
        >
          {#each mapItems as { href, emoji, key }}
            <a
              href={href}
              class="block px-4 py-1 whitespace-nowrap hover:bg-indigo-50 dark:hover:bg-indigo-800 hover:shadow-md hover:shadow-violet-300/30 dark:hover:shadow-violet-500/20 rounded text-sm transition"
              on:click={() => mapOpen = false}
            >
              {emoji} {t[key] ?? key}
            </a>
          {/each}
        </div>
      </div>

      <!-- Other Desktop Nav Links -->
      <a href="{base}/articles" class="font-bold hover:text-violet-500 transition">📝 {t.articles || 'Articles'}</a>
      <a href="{base}/about" class="font-bold hover:text-violet-500 transition">📖 {t.about}</a>
      <a href="{base}/credits" class="font-bold hover:text-violet-500 transition">🌟 {t.credits}</a>
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

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
  <div 
    transition:slide={{ duration: 300, easing: quintOut }}
    class="fixed inset-0 z-40 bg-white dark:bg-indigo-950 pt-16 pb-6 px-6 flex flex-col md:hidden"
  >
    <nav class="flex flex-col space-y-4 flex-1 overflow-y-auto">
      <!-- Mobile Nav Items -->
      {#each mainNavItems as { href, emoji, key, hasSubmenu }}
        {#if hasSubmenu}
          <!-- Map with Submenu -->
          <div class="border-b border-indigo-100 dark:border-indigo-800 pb-2">
            <button 
              class="w-full text-left font-bold py-2 flex items-center justify-between"
              on:click={() => mapOpen = !mapOpen}
            >
              <span>{emoji} {t[key]}</span>
              <span class="transform transition-transform duration-200 {mapOpen ? 'rotate-180' : ''}">
                ▼
              </span>
            </button>
            
            {#if mapOpen}
              <div class="pl-4 py-2 space-y-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mt-2">
                {#each mapItems as { href, emoji, key }}
                  <a 
                    href={href} 
                    class="block py-2 hover:text-violet-500 transition"
                    on:click={() => { mobileMenuOpen = false; mapOpen = false; }}
                  >
                    {emoji} {t[key] ?? key}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <!-- Regular Nav Item -->
          <a 
            href={href} 
            class="block font-bold py-2 border-b border-indigo-100 dark:border-indigo-800 hover:text-violet-500 transition"
            on:click={() => mobileMenuOpen = false}
          >
            {emoji} {t[key] ?? key}
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
