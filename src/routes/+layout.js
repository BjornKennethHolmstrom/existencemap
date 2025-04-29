// src/routes/+layout.js
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export const ssr = false;
export const prerender = false;

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  if (browser) {
    // Handle hash-based URLs for backward compatibility
    if (url.pathname === '/' && window.location.hash && window.location.hash.startsWith('#/')) {
      // Extract the path from the hash
      const hashPath = window.location.hash.substring(2);
      // Navigate to the direct path
      goto(hashPath, { replaceState: true });
      return {};
    }
  }
  
  return {};
}
