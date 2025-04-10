<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  
  // Get translations
  $: t = getTranslation($langStore, 'map_mysticalStates');

  // Get translations and domain info
  $: tCommon = getTranslation($langStore, 'common');
  const domain = 'mysticalStates';
  $: domainTranslated = tCommon[domain] || domain;
  
  // Prepare share information specific to this domain
  $: shareTitle = `${domainTranslated} | Existence Map`;
  $: shareDescription = `Explore the concept of ${domainTranslated.toLowerCase()} in this contemplative journey through consciousness, reality, and mystery.`;

</script>

<MysticSection className="text-violet-900 dark:text-violet-100 pt-12 pb-32">
  <MysticParticles />

  <DomainNav />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-violet-700 dark:text-violet-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- What Are Mystical States -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-violet-800 dark:text-violet-200">{t.whatTitle}</h2>
    <p>{t.whatText}</p>
  </div>

  <!-- Paths That Lead There -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-violet-800 dark:text-violet-200">{t.pathsTitle}</h2>
    <p>{t.pathsText}</p>
  </div>

  <!-- Examples of Mystical States -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-violet-800 dark:text-violet-200">{t.examplesTitle}</h2>
    <p>{t.examplesText}</p>
    <ul class="list-disc list-inside mt-4 space-y-2 text-sm">
      {#each t.examplesList as example}
        <li>{example}</li>
      {/each}
    </ul>
  </div>

  <!-- States vs. Stages -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-violet-800 dark:text-violet-200">{t.stagesTitle}</h2>
    <p>{t.stagesText}</p>
  </div>

  <!-- Practice Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="violet">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <RelatedArticles domain="mysticalStates" />

  <div class="mt-12 border-t border-indigo-100 dark:border-indigo-800 pt-8">
    <ShareButtons title={shareTitle} description={shareDescription} />
  </div>
</MysticSection>

