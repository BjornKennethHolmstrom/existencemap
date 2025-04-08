<script lang="ts">
  export let title: string;
  export let color = 'indigo'; // tailwind color base
</script>

<div class="bg-white dark:bg-black/30 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700
            transition-all hover:shadow-xl backdrop-blur-md animate-float">
  <h3 class={`text-${color}-600 dark:text-${color}-300 font-semibold text-xl mb-2`}>
    {title}
  </h3>
  <slot />
</div>

