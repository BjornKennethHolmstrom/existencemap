<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_reflection');
</script>

<MysticSection className="text-fuchsia-900 dark:text-fuchsia-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-fuchsia-700 dark:text-fuchsia-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Mirror and Self -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mirrorTitle}</h2>
    <p>{t.mirrorText}</p>
  </div>

  <!-- Conscious Reflection -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.consciousTitle}</h2>
    <p>{t.consciousText}</p>
  </div>

  <!-- Tools for Reflection -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.toolsTitle}</h2>
    <ul class="list-disc list-inside space-y-1 text-sm">
      {#each t.tools as tool}
        <li>{tool}</li>
      {/each}
    </ul>
  </div>

  <!-- Integration -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.integrationTitle}</h2>
    <p>{t.integrationText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="fuchsia">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

