<!-- src/lib/components/MysticCard.svelte -->
<script lang="ts">
  export let title: string;
  export let color = 'indigo'; // tailwind color base
</script>

<div class="bg-white/90 dark:bg-black/70 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700
            hover:shadow-xl hover:shadow-{color}-200/20 dark:hover:shadow-{color}-500/10
            transition-all duration-300 backdrop-blur-sm animate-float">
  <h3 class={`text-${color}-600 dark:text-${color}-300 font-semibold text-xl mb-2`}>
    {title}
  </h3>
  <slot />
</div>
