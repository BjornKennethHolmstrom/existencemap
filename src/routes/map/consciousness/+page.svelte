<script lang="ts">
  import DomainNav from '$lib/components/DomainNav.svelte';
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_consciousness');
</script>

<MysticSection className="text-indigo-900 dark:text-indigo-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-indigo-700 dark:text-indigo-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Section: What is Consciousness -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-indigo-800 dark:text-indigo-200">{t.whatTitle}</h2>
    <p>{t.whatText}</p>
  </div>

  <!-- Section: Perspectives Across Cultures -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-indigo-800 dark:text-indigo-200">{t.culturesTitle}</h2>
    <p>{t.culturesText}</p>
  </div>

  <!-- Section: States and Stages -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-indigo-800 dark:text-indigo-200">{t.statesTitle}</h2>
    <p>{t.statesText}</p>
    <a href="https://spiralize.org" class="text-indigo-600 dark:text-indigo-300 underline hover:text-indigo-800 transition">
      {t.spiralizeLink}
    </a>
  </div>

  <!-- Section: Consciousness as Mirror -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-indigo-800 dark:text-indigo-200">{t.mirrorTitle}</h2>
    <p>{t.mirrorText}</p>
  </div>

  <!-- Section: Reflection Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="indigo">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>
  <DomainNav />
</MysticSection>

