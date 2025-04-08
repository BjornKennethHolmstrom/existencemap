<!-- src/lib/components/MysticLogo.svelte -->
<script lang="ts">
  import { base } from '$app/paths'; // Import base path
</script>

<!-- You can use this in +page or header -->
<img
  src="{base}/logo.svg"
  alt="Existence Map Logo"
  class="w-28 h-28 mb-6 animate-float drop-shadow-xl
    dark:drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]"
/>
