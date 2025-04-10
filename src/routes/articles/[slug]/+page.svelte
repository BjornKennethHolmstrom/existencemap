<!-- src/routes/articles/[slug]/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getArticle } from '$lib/data/articles';
  import { browser } from '$app/environment';
  
  // Get the current slug from the URL
  $: slug = $page.params.slug;
  
  // Track if we're showing a fallback version
  $: isLanguageFallback = false;
  $: requestedLanguage = $langStore;
  $: articleContent = null;
  $: articleMeta = {};
  
  // Watch for language changes and update content
  $: if (browser && slug && $langStore) {
    loadArticle($langStore);
  }
  
  // Function to dynamically load article content
  async function loadArticle(lang) {
    try {
      console.log(`Loading article: ${slug} in language: ${lang}`);
      // First try the requested language
      const module = await import(`../../../lib/content/articles/${lang}/${slug}.md`);
      articleContent = module.default;
      articleMeta = {
        ...(module.metadata || {}),
        isLanguageFallback: false
      };
      isLanguageFallback = false;
    } catch (e) {
      console.error(`Error loading article in ${lang}:`, e.message);
      
      // If not available in requested language, try English fallback
      if (lang !== 'en') {
        try {
          console.log('Attempting to load English version as fallback');
          const module = await import(`../../../lib/content/articles/en/${slug}.md`);
          articleContent = module.default;
          articleMeta = {
            ...(module.metadata || {}),
            isLanguageFallback: true,
            requestedLanguage: lang
          };
          isLanguageFallback = true;
          requestedLanguage = lang;
        } catch (fallbackError) {
          console.error('Article not found in fallback language:', fallbackError.message);
          articleContent = null;
          articleMeta = {};
        }
      } else {
        console.error('Article not found and no fallback available');
        articleContent = null;
        articleMeta = {};
      }
    }
  }
  
  // Initial load
  onMount(() => {
    if (browser && slug) {
      loadArticle($langStore);
    }
  });
</script>

{#if articleContent}
  <svelte:component this={articleContent} {...articleMeta} />
{:else}
  <div class="max-w-3xl mx-auto py-12 text-center">
    <h1 class="text-3xl font-bold text-red-500">Article Not Found</h1>
    <p class="mt-4">Sorry, we couldn't find the article you're looking for.</p>
  </div>
{/if}
