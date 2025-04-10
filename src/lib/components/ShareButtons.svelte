<!-- src/lib/components/ShareButtons.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { langStore } from '$lib/stores/langStore';
  import { getTranslation } from '$lib/i18n';
  
  // Props
  export let title = 'Existence Map - A multidimensional map of consciousness, reality, and mystery';
  export let description = 'A contemplative web project that invites visitors to journey through various layers of consciousness. Not a dogma but a doorway.';
  export let className = '';
  
  // Component state
  let copied = false;
  
  // Get translations
  $: tShare = getTranslation($langStore, 'share');
  
  // Current URL
  $: url = browser ? window.location.href : '';
  
  // Social share URLs
  $: twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title}\n\n${description}`)}`;
  $: facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`;
  $: linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(description)}`;
  $: blueskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n\n${description}\n\n${url}`)}`;
  
  // Copy URL to clipboard
  async function copyUrl() {
    if (!browser) return;
    
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  }

  // Native share functionality
  async function nativeShare() {
    if (!browser || !navigator.share) return;
    
    try {
      await navigator.share({
        title: title,
        text: description,
        url: url,
      });
      console.log('Content shared successfully');
    } catch (err) {
      console.error('Error sharing content:', err);
    }
  }

  // Check if Web Share API is available
  $: isWebShareAvailable = browser && !!navigator.share;
</script>

<div class={`flex flex-col items-center space-y-4 ${className}`}>
  <p class="text-sm font-medium text-indigo-500 dark:text-indigo-300">
    {tShare?.share || 'Share'}
  </p>
  
  <div class="flex flex-wrap justify-center gap-4">
    <!-- Native Share Button - only shown if supported -->
    {#if isWebShareAvailable}
      <button
        on:click={nativeShare}
        class="p-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
        title={tShare?.shareViaDevice || 'Share via your device'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
    {/if}
    
    <!-- Twitter -->
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="p-2.5 rounded-full bg-white dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
      title={tShare?.shareOnTwitter || 'Share on Twitter'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-800 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
    
    <!-- Bluesky (Inkscape-edited version) -->
    <a
      href={blueskyUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="p-2.5 rounded-full bg-white dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
      title={tShare?.shareOnBluesky || 'Share on Bluesky'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-800 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m 5.4120543,5.7558876 c 2.1258651,1.771554 6.0237547,3.7968849 6.7323767,5.5684384 0.708622,-1.7715535 4.60651,-3.7968844 6.732375,-5.5684384 1.417244,-1.2046567 3.188797,-1.7715539 3.188797,1.0629324 0,0.7086216 -0.35431,4.251729 -0.708621,4.960351 -0.708622,2.125864 -3.188798,2.834486 -5.314663,2.480176 3.188798,0.708621 3.897419,2.480176 1.771555,4.60604 -3.543108,3.543108 -4.960351,-4.960352 -5.668973,-6.023283 0,0 -0.07087,-0.28345 -0.07087,0 -0.637755,1.062931 -2.054998,9.566391 -5.5981067,6.023283 C 4.3500635,16.739523 5.0586851,14.967968 8.2474819,14.259347 6.1216175,14.613657 3.641442,13.905035 2.9328203,11.779171 2.5785095,11.070549 2.2241988,7.5274416 2.2241988,6.81882 c 0,-2.8344863 1.7715539,-2.2675891 3.188797,-1.0629324" />
      </svg>
    </a>
    
    <!-- Facebook -->
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="p-2.5 rounded-full bg-white dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
      title={tShare?.shareOnFacebook || 'Share on Facebook'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-800 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </a>
    
    <!-- LinkedIn -->
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="p-2.5 rounded-full bg-white dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
      title={tShare?.shareOnLinkedIn || 'Share on LinkedIn'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-800 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
    
    <!-- Copy Link -->
    <button
      on:click={copyUrl}
      class="p-2.5 rounded-full bg-white dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors relative group"
      title={tShare?.copyLink || 'Copy link'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-800 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
      
      {#if copied}
        <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-900 text-white text-xs py-1 px-2 rounded">
          {tShare?.copied || 'Copied!'}
        </span>
      {/if}
    </button>
  </div>
</div>
