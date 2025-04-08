<!-- src/lib/components/MysticSection.svelte -->
<script lang="ts">
  export let className = '';
</script>

<section class={`relative overflow-hidden w-full py-12 md:py-16 px-4 md:px-8 flex flex-col items-center justify-center ${className}
  bg-gradient-to-br from-indigo-100 via-white to-purple-200
  dark:from-indigo-900 dark:via-black dark:to-purple-950
  transition-all`}>

  <!-- Aura background -->
  <div class="absolute -z-10 w-[140vw] h-[140vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-200
    dark:from-indigo-900 dark:via-purple-800 dark:to-black
    opacity-20 rounded-full blur-3xl animate-gradient-slow">
  </div>

  <div class="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
    <slot />
  </div>
</section>
