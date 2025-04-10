<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_other');

  // Get translations and domain info
  $: tCommon = getTranslation($langStore, 'common');
  const domain = 'other';
  $: domainTranslated = tCommon[domain] || domain;
  
  // Prepare share information specific to this domain
  $: shareTitle = `${domainTranslated} | Existence Map`;
  $: shareDescription = `Explore the concept of ${domainTranslated.toLowerCase()} in this contemplative journey through consciousness, reality, and mystery.`;
</script>

<MysticSection className="text-indigo-900 dark:text-indigo-100 pt-12 pb-32">
  <MysticParticles />

  <DomainNav />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-indigo-700 dark:text-indigo-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Alien Consciousness -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.alienTitle}</h2>
    <p>{t.alienText}</p>
  </div>

  <!-- The Stranger Within -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.innerTitle}</h2>
    <p>{t.innerText}</p>
  </div>

  <!-- Radical Difference -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.differenceTitle}</h2>
    <p>{t.differenceText}</p>
  </div>

  <!-- The Mirror of the Unknown -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mirrorTitle}</h2>
    <p>{t.mirrorText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="indigo">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <RelatedArticles domain="other" />

  <div class="mt-12 border-t border-indigo-100 dark:border-indigo-800 pt-8">
    <ShareButtons title={shareTitle} description={shareDescription} />
  </div>

</MysticSection>

