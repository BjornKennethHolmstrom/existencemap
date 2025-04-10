<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { getRoute, addLangToRoute } from '$lib/utils/hashRoutes';
  
  // Get translations
  $: t = getTranslation($langStore, 'common');
  $: tFooter = getTranslation($langStore, 'footer');
  
  // Generate URLs with language parameter
  $: homeUrl = addLangToRoute(getRoute(''), $langStore);
  $: mapUrl = addLangToRoute(getRoute('map'), $langStore);
  $: articlesUrl = addLangToRoute(getRoute('articles'), $langStore);
  $: contactUrl = addLangToRoute(getRoute('contact'), $langStore);
  $: aboutUrl = addLangToRoute(getRoute('about'), $langStore);
  $: creditsUrl = addLangToRoute(getRoute('credits'), $langStore);
  
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Main navigation links - using the direct URL variables
  const mainLinks = [
    { url: mapUrl, emoji: '🗺️', key: 'map' },
    { url: articlesUrl, emoji: '📝', key: 'articles' },
    { url: contactUrl, emoji: '✉️', key: 'contact' },
    { url: aboutUrl, emoji: '📖', key: 'about' },
    { url: creditsUrl, emoji: '🌟', key: 'credits' }
  ];
  
  // Social media links
  const socialLinks = [
    { url: 'https://github.com/bjornksh/existencemap', label: 'GitHub', icon: 'GitHub' },
    // Add more social links as needed
  ];

  // Debug helper function
  function debugUrl(url) {
    console.log("Link URL: ", url);
    return url;
  }
</script>

<footer class="w-full py-12 px-4 md:px-8 bg-indigo-50 dark:bg-indigo-950/50 border-t border-indigo-100 dark:border-indigo-800">
  <div class="max-w-6xl mx-auto">
    <!-- Top section with links -->
    <div class="flex flex-col md:flex-row justify-between mb-10 space-y-8 md:space-y-0">
      <!-- Site identity -->
      <div class="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
        <!-- Direct link using the homeUrl variable -->
        <a href={homeUrl} class="text-xl font-bold text-indigo-900 dark:text-indigo-100 hover:text-violet-600 transition">
          🌌 Existencemap
        </a>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 max-w-xs text-center md:text-left">
          {tFooter?.tagline || 'A multidimensional map of consciousness, reality, and mystery'}
        </p>
      </div>
      
      <!-- Main navigation links -->
      <nav class="flex flex-col items-center md:items-start space-y-2 md:w-1/3">
        <h3 class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          {tFooter?.explore || 'Explore'}
        </h3>
        
        <!-- Hard-coded links rather than iterating for debugging -->
        <a href={mapUrl} class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition">
          🗺️ {t.map || 'Map'}
        </a>
        <a href={articlesUrl} class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition">
          📝 {t.articles || 'Articles'}
        </a>
        <a href={contactUrl} class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition">
          ✉️ {t.contact || 'Contact'}
        </a>
        <a href={aboutUrl} class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition">
          📖 {t.about || 'About'}
        </a>
        <a href={creditsUrl} class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition">
          🌟 {t.credits || 'Credits'}
        </a>
      </nav>
      
      <!-- Connect section -->
      <div class="flex flex-col items-center md:items-start space-y-2 md:w-1/3">
        <h3 class="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          {tFooter?.connect || 'Connect'}
        </h3>
        
        <!-- Social links -->
        {#each socialLinks as { url, label, icon }}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition"
          >
            {icon} {label}
          </a>
        {/each}
        
        <!-- Email link (optional) -->
        <a 
          href="mailto:bjorn.kenneth.holmstrom@gmail.com" 
          class="text-indigo-600 dark:text-indigo-300 hover:text-violet-600 dark:hover:text-violet-300 transition"
        >
          ✉️ bjorn.kenneth.holmstrom@gmail.com
        </a>
      </div>
    </div>
    
    <!-- Bottom section with copyright -->
    <div class="pt-6 border-t border-indigo-200 dark:border-indigo-800 text-center">
      <p class="text-xs text-indigo-500 dark:text-indigo-400">
        © {currentYear} Björn Kenneth Holmström
      </p>
      <p class="text-xs text-indigo-400 dark:text-indigo-500 mt-2 italic">
        "{tFooter?.quote || 'This is not a map to control the world—but a mirror through which the world awakens itself.'}"
      </p>
    </div>
  </div>
</footer>
