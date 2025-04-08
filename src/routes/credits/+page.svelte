<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticLogo from '$lib/components/MysticLogo.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  $: t = getTranslation($langStore, 'credits');
</script>

<MysticSection className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-200">
  <MysticLogo />

  <h1 class="text-4xl font-display font-bold text-center mb-6">{t.creditsTitle}</h1>

  <p class="mb-6 leading-relaxed">{t.intro}</p>

  <ul class="list-disc list-inside space-y-3">
    <li><strong>{t.bjorn}:</strong> {t.bjornDesc}</li>
    <li><strong>{t.chatgpt}:</strong> {t.chatgptDesc}</li>
    <li><strong>{t.claude}:</strong> {t.claudeDesc}</li>
    <li><strong>{t.deepseek}:</strong> {t.deepseekDesc}</li>
    <li><strong>{t.svelte}:</strong> {t.svelteDesc}</li>
    <li><strong>{t.tailwind}:</strong> {t.tailwindDesc}</li>
    <li><strong>{t.mystics}:</strong> {t.mysticsDesc}</li>
  </ul>

  <p class="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">{t.signature}</p>
</MysticSection>

