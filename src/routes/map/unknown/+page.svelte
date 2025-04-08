<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import RelatedArticles from '$lib/components/RelatedArticles.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_unknown');
</script>

<MysticSection className="text-indigo-900 dark:text-indigo-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-indigo-700 dark:text-indigo-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- The Mystery Itself -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mysteryTitle}</h2>
    <p>{t.mysteryText}</p>
  </div>

  <!-- The Edge of Maps -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mapsTitle}</h2>
    <p>{t.mapsText}</p>
  </div>

  <!-- The Unknown in Daily Life -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.dailyTitle}</h2>
    <p>{t.dailyText}</p>
  </div>

  <!-- Shadow and Surrender -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.shadowTitle}</h2>
    <p>{t.shadowText}</p>
  </div>

  <!-- Science and Negative Capability -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.scienceTitle}</h2>
    <p>{t.scienceText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="indigo">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <RelatedArticles domain="unknown" />

  <DomainNav />
</MysticSection>

