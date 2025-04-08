<!-- src/routes/+page.svelte -->
<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticAura from '$lib/components/MysticAura.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { base } from '$app/paths'; // Import base path

  $: t = getTranslation($langStore, 'home');

  const currentYear = new Date().getFullYear();
</script>

<MysticSection>
  <MysticAura />
  <div class="flex flex-col items-center justify-center text-center space-y-4">
    <MysticLogo />
  </div>

  <!-- Hero Heading -->
  <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-display mb-4">
    {t.siteTitle}
  </h1>

  <!-- Subheading -->
  <p class="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 font-body mb-10">
    {t.heroSubtitle}
  </p>

  <!-- Call to Action -->
  <a
    href="{base}/map"
    class="inline-block px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base
      shadow-lg hover:shadow-xl transition-all animate-pulse-soft"
  >
    {t.enterMap}
  </a>

  <!-- Feature Highlights -->
  <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
    <MysticCard title={t.perspectivesTitle} color="orange">
      <p class="text-sm text-gray-600 dark:text-gray-300">{t.perspectivesText}</p>
    </MysticCard>

    <MysticCard title={t.mysticalTitle} color="purple">
      <p class="text-sm text-gray-600 dark:text-gray-300">{t.mysticalText}</p>
    </MysticCard>

    <MysticCard title={t.webTitle} color="emerald">
      <p class="text-sm text-gray-600 dark:text-gray-300">{t.webText}</p>
    </MysticCard>
  </div>
</MysticSection>
