<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import MysticParticles from '$lib/components/MysticParticles.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { langStore } from '$lib/stores/langStore';
  export let data;

  const lang = data.lang;
</script>

<div class="min-h-screen flex flex-col font-body bg-white dark:bg-indigo-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
  <MysticParticles />
  <Header {lang} />

  <main class="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
    <slot />
  </main>

  <Footer />
</div>
