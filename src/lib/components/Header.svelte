<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { base } from '$app/paths'; // Import base path
  import { page } from '$app/stores'; // Import page store

  $: t = getTranslation($langStore, 'common');

  let isDark = true;
  let mapOpen = false;

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

  function toggleTheme() {
    if (!browser) return;

    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
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
  
  // NEW: Handle language change with URL parameter update
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

<header class="w-full py-4 px-6 flex items-center justify-between text-sm font-semibold tracking-wide text-indigo-900 dark:text-indigo-100 z-10">
  <a href="{base}/" class="text-lg font-bold hover:text-violet-600 transition">🌌 Existencemap</a>

  <div class="flex items-center space-x-6">
    <nav class="flex items-center space-x-6">
      <div
        class="relative group inline-block"
        on:mouseenter={() => mapOpen = true}
        on:mouseleave={() => mapOpen = false}
      >
        <!-- CLICKABLE TOP LINK -->
        <a
          href="{base}/map"
          class="font-bold hover:text-violet-500 transition block px-2 py-2"
          aria-haspopup="true"
          aria-expanded={mapOpen}
          on:click={() => mapOpen = !mapOpen}
        >
          🗺️ {t.map}
        </a>

        <!-- DROPDOWN -->
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

      <!-- New Articles Link -->
      <a href="{base}/articles" class="font-bold hover:text-violet-500 transition">📝 {t.articles || 'Articles'}</a>

      <a href="{base}/about" class="font-bold hover:text-violet-500 transition">📖 {t.about}</a>
      <a href="{base}/credits" class="font-bold hover:text-violet-500 transition">🌟 {t.credits}</a>
    </nav>

    <!-- Language Selector - Updated to maintain URL parameters -->
    <select
      class="bg-transparent border border-indigo-300 dark:border-indigo-600 rounded px-2 py-1 text-sm text-indigo-700 dark:text-indigo-100 hover:border-violet-500 transition"
      value={$langStore}
      on:change={handleLanguageChange}
    >
      <option value="en">🇬🇧 English</option>
      <option value="sv">🇸🇪 Svenska</option>
    </select>

    <!-- Theme Toggle -->
    <button
      class="text-xl hover:text-violet-500 transition"
      on:click={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  </div>
</header>
