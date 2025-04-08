<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_cosmos');
</script>

<MysticSection className="text-sky-900 dark:text-sky-100 pt-12 pb-32">
  <MysticParticles />

  <h1 class="text-4xl md:text-5xl font-display font-bold text-center mb-4">{t.title}</h1>
  <p class="text-center text-sky-700 dark:text-sky-300 mb-12 max-w-3xl mx-auto">
    {t.subtitle}
  </p>

  <!-- Origins and Vastness -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.originsTitle}</h2>
    <p>{t.originsText}</p>
  </div>

  <!-- The Web of Galaxies -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.webTitle}</h2>
    <p>{t.webText}</p>
  </div>

  <!-- Cosmology and Myth -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mythTitle}</h2>
    <p>{t.mythText}</p>
  </div>

  <!-- Infinity as Ground -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.infinityTitle}</h2>
    <p>{@html t.infinityText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="sky">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <DomainNav />
</MysticSection>

