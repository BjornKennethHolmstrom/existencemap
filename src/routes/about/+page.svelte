<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  $: t = getTranslation($langStore, 'about');
</script>

<MysticSection className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-200">
  <MysticLogo />

  <h1 class="text-4xl font-display font-bold text-center mb-6">{t.aboutTitle}</h1>

  <p class="mb-6 leading-relaxed">
    {t.paragraph1}
  </p>

  <p class="mb-6 leading-relaxed">
    {t.paragraph2}
  </p>

  <p class="mb-6 leading-relaxed italic text-purple-600 dark:text-purple-300">
    “{t.quote}”
  </p>

  <p class="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
    {t.signature}
  </p>
</MysticSection>

