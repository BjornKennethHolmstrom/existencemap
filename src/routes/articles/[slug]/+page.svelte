<!-- src/routes/articles/[slug]/+page.svelte -->
<script>
  // This is a simplified component that just renders the markdown content
  // All styling, headers, and navigation are handled by ArticleLayout.svelte
  
  // Get the data from the page load function
  export let data;
</script>

<!-- Just render the markdown content, the layout is handled in ArticleLayout.svelte -->
<svelte:component this={data.content} {...data.meta} />
