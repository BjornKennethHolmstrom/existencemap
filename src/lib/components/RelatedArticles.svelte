<!-- src/lib/components/RelatedArticles.svelte -->
<script>
  import { base } from '$app/paths';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { getArticlesByDomain } from '$lib/data/articles';
  import { addLangParam } from '$lib/utils/langUrl';
  
  // Props
  export let domain = '';
  
  // Get translations
  $: t = getTranslation($langStore, 'articles');
  
  // Get related articles
  $: relatedArticles = getArticlesByDomain(domain, $langStore);
  
  // Generate article URLs with language parameter
  $: getArticleUrl = (slug) => addLangParam(`${base}/articles/${slug}`, $langStore);
</script>

{#if relatedArticles.length > 0}
  <section class="mt-16 p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
    <h2 class="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-200">{t.relatedArticles}</h2>
    <div class="space-y-4">
      {#each relatedArticles as article}
        <a 
          href={getArticleUrl(article.slug)} 
          class="block p-4 bg-white dark:bg-black/20 rounded-lg shadow hover:shadow-md transition hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
        >
          <h3 class="font-semibold text-lg text-indigo-600 dark:text-indigo-300">{article.title}</h3>
          <p class="text-sm text-indigo-500 dark:text-indigo-400 italic">{article.subtitle}</p>
          
          {#if !article.available}
            <div class="mt-2 text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full inline-block">
              {$langStore === 'sv' ? 'Endast på engelska' : 'English only'}
            </div>
          {/if}
        </a>
      {/each}
    </div>
  </section>
{/if}
