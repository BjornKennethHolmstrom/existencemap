<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_beyond_religion');
</script>

<MysticSection className="text-amber-900 dark:text-amber-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-amber-700 dark:text-amber-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Direct Experience -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.directTitle}</h2>
    <p>{t.directText}</p>
  </div>

  <!-- Beyond Dogma -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.dogmaTitle}</h2>
    <p>{t.dogmaText}</p>
  </div>

  <!-- Integration of Paths -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.integrationTitle}</h2>
    <p>{t.integrationText}</p>
  </div>

  <!-- The Sacred Without a Name -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.namelessTitle}</h2>
    <p>{t.namelessText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="amber">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

