<script lang="ts">
  import MysticSection from '$lib/components/MysticSection.svelte';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import MysticCard from '$lib/components/MysticCard.svelte';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';

  $: t = getTranslation($langStore, 'map');

  const domains = [
    { icon: '🧠', key: 'consciousness' },
    { icon: '🌱', key: 'development' },
    { icon: '💫', key: 'interbeing' },
    { icon: '♾️', key: 'unknown' },
    { icon: '🧘', key: 'mysticalStates' },
    { icon: '🔭', key: 'cosmos' },
    { icon: '🪞', key: 'reflection' },
    { icon: '🌀', key: 'spiral' }
  ];
</script>

<MysticSection className="min-h-screen flex flex-col items-center justify-center text-center pt-4">
  <MysticParticles />

  <h1 class="text-4xl font-bold font-display mb-6 text-indigo-400 dark:text-indigo-200">{t.title}</h1>
  <p class="max-w-xl text-indigo-400 dark:text-indigo-300 mb-1">
    {t.subtitle}
  </p>

  <div class="relative w-[32rem] h-[32rem] sm:w-[40rem] sm:h-[40rem] md:w-[48rem] md:h-[42rem]">
    {#each domains as { icon, key }, i}
      <a
        href={`/map/${key}`}
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

