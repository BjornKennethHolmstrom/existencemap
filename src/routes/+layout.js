// src/routes/+layout.js
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_BASE_PATH } from '$env/static/public';

// Set up SvelteKit to use hash-based routing in production
export const ssr = false;
export const prerender = false;
export const trailingSlash = 'never';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  if (browser) {
    // Handle URL hash if present, but avoid creating redirection loops
    const hashPath = window.location.hash.slice(1);
    if (hashPath && hashPath !== '/' && url.pathname === '/' && !sessionStorage.getItem('processing_hash')) {
      // Set a flag to prevent redirection loops
      sessionStorage.setItem('processing_hash', 'true');
      goto(hashPath, { replaceState: true });
      // Clear the flag after a short delay
      setTimeout(() => sessionStorage.removeItem('processing_hash'), 100);
      return {};
    }
    
    // Clear the flag if we're not processing a hash
    sessionStorage.removeItem('processing_hash');
    
    // Rest of your existing code...
  }
  
  return {};
}
