<!-- src/lib/components/RelatedArticles.svelte -->
<script>
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import { base } from '$app/paths';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { getArticles } from '$lib/data/articles';
  import { addLangParam } from '$lib/utils/langUrl';
  
  // Get translations
  $: t = getTranslation($langStore, 'articles');
  $: tCommon = getTranslation($langStore, 'common');
  
  // Get articles for current language
  $: articles = getArticles($langStore);
  
  // Generate article URLs with language parameter
  $: getArticleUrl = (slug) => addLangParam(`${base}/articles/${slug}`, $langStore);
  
  // Format date based on current language
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString($langStore === 'sv' ? 'sv-SE' : 'en-US', options);
  }
</script>

<MysticSection className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
  <MysticLogo />
  
  <h1 class="text-3xl md:text-4xl font-display font-bold text-center mb-4">{t.pageTitle}</h1>
  
  <p class="text-base md:text-lg text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
    {t.pageSubtitle}
  </p>
  
  <div class="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 px-4">
    {#each articles as article}
      <a 
        href={getArticleUrl(article.slug)} 
        class="block bg-white dark:bg-black/30 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 
               hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all
               backdrop-blur-md duration-300"
      >
        <div class="text-2xl md:text-3xl mb-2 md:mb-3">{article.emoji}</div>
        <h2 class="text-xl md:text-2xl font-display font-semibold mb-1 md:mb-2 text-indigo-700 dark:text-indigo-400">{article.title}</h2>
        <p class="text-xs md:text-sm italic text-indigo-600 dark:text-indigo-500 mb-2 md:mb-3">{article.subtitle}</p>
        <p class="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4 line-clamp-3">{article.description}</p>
        
        <div class="flex flex-wrap justify-between items-center text-xs md:text-sm gap-2">
          <span class="text-violet-600 dark:text-violet-400 capitalize">{tCommon[article.domain]}</span>
          <time datetime={article.date} class="text-gray-500 dark:text-gray-400">
            {formatDate(article.date)}
          </time>
        </div>
        
        {#if !article.available}
          <div class="mt-2 text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full inline-block">
            {$langStore === 'sv' ? 'Endast på engelska' : 'English only'}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</MysticSection>
