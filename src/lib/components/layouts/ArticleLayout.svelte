<!-- src/lib/components/layouts/ArticleLayout.svelte -->
<script>
  import MysticSection from '$lib/components/MysticSection.svelte';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { addLangParam } from '$lib/utils/langUrl';
  import { getArticle } from '$lib/data/articles';
  
  // Get translations
  $: t = getTranslation($langStore, 'articles');
  $: tCommon = getTranslation($langStore, 'common');
  
  // Get the current slug from the URL
  $: slug = $page.url.pathname.split('/').pop();
  
  // Get metadata from the markdown frontmatter
  export let title;
  export let subtitle = '';
  export let domain = ''; // Related domain (consciousness, development, etc.)
  export let publishDate = '';
  export let author = 'Björn Kenneth Holmström';
  
  // Language fallback information (from +page.js)
  export let isLanguageFallback = false;
  export let requestedLanguage = '';
  
  // Get complete article data from centralized storage - supplement with frontmatter data
  $: articleData = getArticle(slug, $langStore);
  
  // Use centralized data or fall back to frontmatter props
  $: articleTitle = articleData?.title || title;
  $: articleSubtitle = articleData?.subtitle || subtitle;
  $: articleDomain = articleData?.domain || domain;
  $: articleDate = articleData?.date || publishDate;
  $: articleAuthor = articleData?.author || author;
  
  // Format date based on current language
  $: formattedDate = articleDate ? new Date(articleDate).toLocaleDateString(
    $langStore === 'sv' ? 'sv-SE' : 'en-US', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  ) : '';
  
  // Determine if we should show domain navigation
  $: showDomainNav = !!articleDomain;
  
  // Get translated domain name if available
  $: domainTranslated = articleDomain ? (tCommon[articleDomain] || articleDomain) : '';
  
  // Generate URLs with language parameter
  $: homeUrl = addLangParam(`${base}/`, $langStore);
  $: articlesUrl = addLangParam(`${base}/articles`, $langStore);
  $: domainUrl = articleDomain ? addLangParam(`${base}/map/${articleDomain}`, $langStore) : '';
</script>

<MysticSection className="max-w-3xl mx-auto">
  <div class="w-full">
    <!-- Language fallback notice -->
    {#if isLanguageFallback}
      <div class="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 p-4 rounded-lg mb-6 text-sm">
        {requestedLanguage === 'sv' 
          ? 'Denna artikel är inte tillgänglig på svenska än. Visar engelska versionen istället.' 
          : 'This article is not yet available in your selected language. Showing English version instead.'}
      </div>
    {/if}
  
    <!-- Breadcrumb navigation -->
    <nav class="text-sm mb-8 text-indigo-500 dark:text-indigo-300">
      <a href={homeUrl} class="hover:underline">
        {$langStore === 'sv' ? 'Hem' : 'Home'}
      </a> →
      <a href={articlesUrl} class="hover:underline">{tCommon.articles}</a>
      {#if articleDomain}
        → <a href={domainUrl} class="hover:underline capitalize">{domainTranslated}</a>
      {/if}
    </nav>
    
    <!-- Article header -->
    <header class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-display font-bold mb-4 text-indigo-800 dark:text-indigo-300">
        {articleTitle}
      </h1>
      
      {#if articleSubtitle}
        <p class="text-xl text-indigo-600 dark:text-indigo-400 italic mb-6">{articleSubtitle}</p>
      {/if}
      
      <div class="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        {#if formattedDate}
          <time datetime={articleDate}>{formattedDate}</time>
          <span class="mx-2">•</span>
        {/if}
        <span>{articleAuthor}</span>
      </div>
    </header>
    
    <!-- Article content -->
    <article class="prose prose-lg dark:prose-invert prose-indigo max-w-none mx-auto">
      <slot />
    </article>
    
    <!-- Related domain nav if applicable -->
    {#if showDomainNav}
      <div class="mt-16 text-center">
        <hr class="border-t border-indigo-200 dark:border-indigo-700 my-12" />
        <h2 class="text-xl font-display mb-4">{t.exploreDomains}</h2>
        <a href={domainUrl} class="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition shadow-md hover:shadow-lg">
          {t.visitDomain}: {domainTranslated}
        </a>
      </div>
    {/if}
    
    <!-- Back to articles -->
    <div class="mt-16 text-center">
      <a href={articlesUrl} class="text-indigo-500 dark:text-indigo-300 hover:underline flex items-center justify-center">
        ← {t.backToArticles}
      </a>
    </div>
  </div>
</MysticSection>
