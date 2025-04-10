<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import DomainNav from '$lib/components/DomainNav.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map_cosmos');

  // Get translations and domain info
  $: tCommon = getTranslation($langStore, 'common');
  const domain = 'cosmos';
  $: domainTranslated = tCommon[domain] || domain;
  
  // Prepare share information specific to this domain
  $: shareTitle = `${domainTranslated} | Existence Map`;
  $: shareDescription = `Explore the concept of ${domainTranslated.toLowerCase()} in this contemplative journey through consciousness, reality, and mystery.`;
</script>

<MysticSection className="text-sky-900 dark:text-sky-100 pt-12 pb-32">
  <MysticParticles />

  <DomainNav />

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

  <!-- Black Holes: Cosmic Thresholds -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.blackHolesTitle}</h2>
    <p>{t.blackHolesText}</p>
  </div>

  <!-- The Physics of Transcendence -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.physicsTitle}</h2>
    <p>{t.physicsText}</p>
    <ul class="list-disc list-inside mt-4 space-y-2 text-sm">
      {#each t.physicsList as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <!-- The Boundary of Knowing -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.boundaryTitle}</h2>
    <p>{t.boundaryText}</p>
  </div>

  <!-- Cosmic Mirrors -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.mirrorsTitle}</h2>
    <p>{t.mirrorsText}</p>
    <ul class="list-disc list-inside mt-4 space-y-2 text-sm">
      {#each t.mirrorsList as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <!-- White Holes and Cosmic Rebirth -->
  <div class="max-w-3xl mx-auto mb-16 space-y-4">
    <h2 class="text-2xl font-semibold">{t.whiteHolesTitle}</h2>
    <p>{t.whiteHolesText}</p>
  </div>

  <!-- Prompt -->
  <div class="max-w-3xl mx-auto mt-20">
    <MysticCard title={t.promptTitle} color="sky">
      <p class="text-sm">{t.promptText}</p>
    </MysticCard>
  </div>

  <div class="mt-12 border-t border-indigo-100 dark:border-indigo-800 pt-8">
    <ShareButtons title={shareTitle} description={shareDescription} />
  </div>

</MysticSection>

