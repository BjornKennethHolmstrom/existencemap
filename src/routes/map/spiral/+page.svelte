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
  $: t = getTranslation($langStore, 'map_spiral');

  // Get translations and domain info
  $: tCommon = getTranslation($langStore, 'common');
  const domain = 'spiral';
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

  <!-- Spiral as Metaphor -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.metaphorTitle}</h2>
    <p>{t.metaphorText}</p>
  </div>

  <!-- Spiral Dynamics -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.dynamicsTitle}</h2>
    <p>{@html t.dynamicsText}</p>
  </div>

  <!-- No Stage is Better -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.humilityTitle}</h2>
    <p>{t.humilityText}</p>
  </div>

  <!-- Cyclical Stagnation -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.stagnationTitle}</h2>
    <p>{t.stagnationText}</p>
    <ul class="list-disc list-inside space-y-1 text-sm">
      {#each t.stagnationList as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p>{t.stagnationText2}</p>
  </div>

  <!-- The Golden Chain -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.chainTitle}</h2>
    <p>{t.chainText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="violet">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <RelatedArticles domain="spiral" />

  <div class="mt-12 border-t border-indigo-100 dark:border-indigo-800 pt-8">
    <ShareButtons title={shareTitle} description={shareDescription} />
  </div>
</MysticSection>

