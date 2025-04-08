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
    // Handle URL hash if present
    const hashPath = window.location.hash.slice(1);
    if (hashPath && hashPath !== '/' && url.pathname === '/') {
      // If we have a hash path and we're on the homepage, navigate to that route
      goto(hashPath, { replaceState: true });
      return {};
    }
    
    // The old redirection logic for non-hash URLs can remain as a fallback
    const redirectPath = sessionStorage.getItem('existencemap:redirect');
    if (redirectPath && redirectPath !== '/' && url.pathname === '/') {
      sessionStorage.removeItem('existencemap:redirect');
      
      // Instead of directly navigating, convert to a hash-based route
      const hashRoute = redirectPath.startsWith('/') ? redirectPath : '/' + redirectPath;
      window.location.replace('/#' + hashRoute);
      return {};
    }
  }
  
  return {};
}
