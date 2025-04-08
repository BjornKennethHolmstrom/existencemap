<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_feminine');
</script>

<MysticSection className="text-rose-900 dark:text-rose-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-rose-700 dark:text-rose-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Archetypal Feminine -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.archetypeTitle}</h2>
    <p>{t.archetypeText}</p>
  </div>

  <!-- Myth and Matrix -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mythTitle}</h2>
    <p>{t.mythText}</p>
  </div>

  <!-- Sacred Polarity -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.polarityTitle}</h2>
    <p>{t.polarityText}</p>
  </div>

  <!-- Embodied Wisdom -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.embodimentTitle}</h2>
    <p>{t.embodimentText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="rose">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

