<!-- src/routes/map/+page.svelte -->
<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  import { base } from '$app/paths';
  import { addLangParam } from '$lib/utils/langUrl';

  $: t = getTranslation($langStore, 'map');

  const domains = [
    { icon: '🧠', key: 'consciousness' },
    { icon: '🌱', key: 'development' },
    { icon: '💫', key: 'interbeing' },
    { icon: '♾️', key: 'unknown' },
    { icon: '🧘', key: 'mysticalStates' },
    { icon: '🔭', key: 'cosmos' },
    { icon: '🪞', key: 'reflection' },
    { icon: '🌀', key: 'spiral' },
    { icon: '🌺', key: 'feminine'},
    { icon: '👽', key: 'other'}

  ];
  
  // Function to generate URLs with language parameters
  $: getDomainUrl = (key) => addLangParam(`${base}/map/${key}`, $langStore);
</script>

<MysticSection className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">
  <MysticParticles />

  <h1 class="text-3xl md:text-4xl font-bold font-display mb-4 text-indigo-400 dark:text-indigo-200">{t.title}</h1>
  <p class="max-w-xl text-indigo-400 dark:text-indigo-300 mb-6 px-4">
    {t.subtitle}
  </p>

  <!-- Mobile Layout: Grid -->
  <div class="md:hidden w-full grid grid-cols-2 gap-4 px-4">
    {#each domains as { icon, key }, i}
      <a
        href={getDomainUrl(key)}
        class="transform transition hover:scale-105 cursor-pointer"
      >
        <MysticCard title={t[key]}>
          <div class="text-2xl mb-1">{icon}</div>
        </MysticCard>
      </a>
    {/each}
  </div>
  
  <!-- Desktop Layout: Radial -->
  <div class="hidden md:block relative w-[32rem] h-[32rem] lg:w-[40rem] lg:h-[40rem] xl:w-[48rem] xl:h-[42rem]">
    {#each domains as { icon, key }, i}
      <a
        href={getDomainUrl(key)}
        class="absolute transition transform hover:scale-105 cursor-pointer"
        style={`top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(${i * (360 / domains.length)}deg) translate(16rem) rotate(-${i * (360 / domains.length)}deg);`}
      >
        <MysticCard title={t[key]}>
          <div class="text-2xl">{icon}</div>
        </MysticCard>
      </a>
    {/each}
  </div>
</MysticSection>
