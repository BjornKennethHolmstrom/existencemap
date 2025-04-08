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
  $: t = getTranslation($langStore, 'map_spiral');
</script>

<MysticSection className="text-violet-900 dark:text-violet-100 pt-12 pb-32">
  <MysticParticles />

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

  <DomainNav />
</MysticSection>

