<script lang="ts">
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getArticles } from '$lib/data/articles'; // assumes merged article metadata
  import { getTranslation } from '$lib/i18n';
  import type { ArticleMeta } from '$lib/types';

  $: lang = $langStore;
  $: t = getTranslation(lang, 'insights');

  $: availableArticles = getArticles.filter((a) => a.available.includes(lang));
</script>

<svelte:head>
  <title>{t.metaTitle}</title>
  <meta name="description" content={t.metaDescription} />
</svelte:head>

<section class="pt-20 pb-32 px-4 md:px-12 text-center text-violet-900 dark:text-violet-100">
  <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">{t.title}</h1>
  <p class="text-md text-violet-600 dark:text-violet-300 mb-12 max-w-3xl mx-auto">{t.subtitle}</p>

  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {#each availableArticles as a (a.slug)}
      <a href={`/insights/${a.slug}`} class="transition group rounded-2xl p-6 border border-violet-200 dark:border-violet-700 hover:shadow-xl hover:bg-violet-50 dark:hover:bg-violet-900/30">
        <div class="text-4xl mb-2">{a.emoji}</div>
        <h2 class="text-xl font-bold mb-1">{a.title}</h2>
        <p class="text-sm text-violet-600 dark:text-violet-300 mb-2">{a.subtitle}</p>
        <p class="text-xs opacity-70 italic">{a.date}</p>
      </a>
    {/each}
  </div>
</section>

