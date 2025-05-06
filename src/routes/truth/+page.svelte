<script lang="ts">
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'truth');
  $: perspectives = [
    { icon: "🧠", label: t.rational, summary: t.rational_summary },
    { icon: "❤️", label: t.emotional, summary: t.emotional_summary },
    { icon: "🌀", label: t.mystical, summary: t.mystical_summary },
    { icon: "🖼️", label: t.artistic, summary: t.artistic_summary },
    { icon: "🌐", label: t.systemic, summary: t.systemic_summary },
    { icon: "📜", label: t.ethical, summary: t.ethical_summary },
    { icon: "🔮", label: t.experimental, summary: t.experimental_summary }
  ];

  let selectedPerspective = null;
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

<section class="pt-20 pb-32 px-4 md:px-12 text-center text-violet-900 dark:text-violet-100">
  <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">{t.title}</h1>
  <p class="text-md text-violet-600 dark:text-violet-300 mb-12 max-w-3xl mx-auto italic">
    {t.subtitle}
  </p>

  <!-- Perspectives Circle -->
  <div class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-semibold mb-8">{t.circle_title}</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
      {#each perspectives as perspective}
        <button
          class="rounded-xl p-4 transition hover:shadow-lg border border-violet-200 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/30"
          on:click={() => selectedPerspective = perspective}
        >
          <div class="text-3xl">{perspective.icon}</div>
          <div class="mt-2 font-medium">{perspective.label}</div>
        </button>
      {/each}
    </div>

    {#if selectedPerspective}
      <div class="p-6 rounded-xl bg-violet-50 dark:bg-violet-900/20 mb-12 text-left">
        <h3 class="text-xl font-bold flex items-center gap-2">
          {selectedPerspective.icon} {selectedPerspective.label}
        </h3>
        <p class="mt-2 text-violet-700 dark:text-violet-200">
          {selectedPerspective.summary}
        </p>
      </div>
    {/if}
  </div>

  <!-- Try a Simple Truth Section -->
  <div class="max-w-3xl mx-auto mb-16">
    <h2 class="text-2xl font-semibold mb-4">{t.try_title}</h2>
    <p class="mb-6">{t.try_description}</p>
    <div class="space-y-3 text-left">
      {#each [
        { icon: "🧠", label: t.rational, text: t.rational_i_am },
        { icon: "❤️", label: t.emotional, text: t.emotional_i_am },
        { icon: "🌀", label: t.mystical, text: t.mystical_i_am },
        { icon: "🖼️", label: t.artistic, text: t.artistic_i_am },
        { icon: "🌐", label: t.systemic, text: t.systemic_i_am },
        { icon: "📜", label: t.ethical, text: t.ethical_i_am },
        { icon: "🔮", label: t.experimental, text: t.experimental_i_am }
      ] as item}
        <div class="flex items-start gap-3">
          <span class="text-xl mt-0.5">{item.icon}</span>
          <div>
            <strong>{item.label}:</strong> {item.text}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Direct Experience Section -->
  <div class="max-w-3xl mx-auto border-t border-violet-200 dark:border-violet-800 pt-12">
    <h2 class="text-2xl font-semibold mb-4">{t.experience_title}</h2>
    <p class="text-lg italic mb-4">"{t.experience_quote}"</p>
    <p>{t.experience_invite}</p>
  </div>
</section>
