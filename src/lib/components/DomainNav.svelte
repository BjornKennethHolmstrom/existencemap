<!-- src/lib/components/DomainNav.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { base } from '$app/paths';
  import { getRoute, addLangToRoute } from '$lib/utils/hashRoutes';

  $: lang = get(langStore);
  $: t = getTranslation(lang, 'map_nav');

  const domains = [
    'consciousness',
    'development',
    'mysticalStates',
    'interbeing',
    'unknown',
    'cosmos',
    'reflection',
    'spiral',
    'feminine',
    'other',
    'beyondReligion',
    'timelessness'
  ];

  $: current = $page.url.pathname.split('/').pop();
  $: index = domains.indexOf(current);

  $: prev = domains[(index - 1 + domains.length) % domains.length];
  $: next = domains[(index + 1) % domains.length];
  
  // Helper function to get hash-based URL with language parameter if needed
  function getNavUrl(path) {
    return addLangToRoute(getRoute(path), lang);
  }
</script>

<div class="mt-8 mb-16">
  <a href={getNavUrl('map')} class="text-indigo-500 dark:text-indigo-300 underline hover:text-indigo-700 transition block mb-8 text-sm">
    ← {t.backToMap}
  </a>

  <hr class="border-t border-indigo-200 dark:border-indigo-600 my-12 w-full max-w-4xl mx-auto" />

  <nav class="w-full max-w-6xl mx-auto flex flex justify-between gap-12 items-center text-sm text-indigo-400 px-4 sm:px-12 md:px-24 lg:px-40">
    <a href={getNavUrl(`map/${prev}`)} class="hover:underline">← {t[prev]}</a>
    <a href={getNavUrl(`map/${next}`)} class="hover:underline">{t[next]} →</a>
  </nav>
</div>
