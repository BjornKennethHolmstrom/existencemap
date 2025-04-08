<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_development');
</script>

<MysticSection className="text-emerald-900 dark:text-emerald-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-emerald-700 dark:text-emerald-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- What Is Development -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{t.whatTitle}</h2>
    <p>{t.whatText}</p>
  </div>

  <!-- Models of Growth -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{t.modelsTitle}</h2>
    <p>{t.modelsText}</p>
    <a href="https://spiralize.org" class="text-emerald-600 dark:text-emerald-300 underline hover:text-emerald-800 transition">
      {t.spiralizeLink}
    </a>
  </div>

  <!-- Nonlinearity -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{t.nonlinearTitle}</h2>
    <p>{t.nonlinearText}</p>
  </div>

  <!-- Challenges & Catalysts -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{t.barriersTitle}</h2>
    <p>{t.barriersText}</p>
  </div>

  <!-- Cosmic Chain -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">{t.chainTitle}</h2>
    <p>{t.chainText}</p>
  </div>

  <!-- Reflection -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="emerald">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

