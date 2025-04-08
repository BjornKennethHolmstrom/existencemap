<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_timelessness');
</script>

<MysticSection className="text-sky-900 dark:text-sky-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-sky-700 dark:text-sky-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- The Paradox of Time -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.paradoxTitle}</h2>
    <p>{t.paradoxText}</p>
  </div>

  <!-- Flow States and Satori -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.flowTitle}</h2>
    <p>{t.flowText}</p>
  </div>

  <!-- The Sacred Now -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.nowTitle}</h2>
    <p>{t.nowText}</p>
  </div>

  <!-- Eternity in the Everyday -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.everydayTitle}</h2>
    <p>{t.everydayText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="sky">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

