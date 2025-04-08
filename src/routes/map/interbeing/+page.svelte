<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import { base } from '$app/paths';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  // Get translations
  $: t = getTranslation($langStore, 'map_interbeing');
</script>

<MysticSection className="text-rose-900 dark:text-rose-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-rose-700 dark:text-rose-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- What Is Interbeing -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-rose-800 dark:text-rose-200">{t.whatTitle}</h2>
    <p>{t.whatText}</p>
  </div>

  <!-- Unity in Philosophy & Tradition -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-rose-800 dark:text-rose-200">{t.sourcesTitle}</h2>
    <p>{t.sourcesText}</p>
    <ul class="list-disc list-inside text-sm mt-2 space-y-2">
      {#each t.sourceQuotes as quote}
        <li>{quote}</li>
      {/each}
    </ul>
  </div>

  <!-- Ecology and Systems -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-rose-800 dark:text-rose-200">{t.ecologyTitle}</h2>
    <p>{t.ecologyText}</p>
  </div>

  <!-- Identity and Relationship -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-rose-800 dark:text-rose-200">{t.selfTitle}</h2>
    <p>{t.selfText}</p>
  </div>

  <!-- Matter is Energy -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-rose-800 dark:text-rose-200">{t.energyTitle}</h2>
    <p>{t.energyText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="rose">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <RelatedArticles domain="interbeing" />

  <DomainNav />
</MysticSection>

