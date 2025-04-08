// src/routes/+layout.js
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export function load({ url }) {
  if (browser) {
    console.log('Layout.js load function executing');
    console.log('Current URL:', url.pathname + url.search);
    
    // Check if we need to redirect from a saved path (from 404.html)
    const redirectPath = sessionStorage.getItem('existencemap:redirect');
    console.log('Stored redirect path:', redirectPath);
    
    if (redirectPath) {
      // Clear the stored path immediately to prevent loops
      sessionStorage.removeItem('existencemap:redirect');
      
      // Only redirect if we're on the home page and have a different path to go to
      if (url.pathname === '/' && redirectPath !== '/') {
        console.log('Redirecting to:', redirectPath);
        
        // Use SvelteKit's goto for proper client-side navigation
        // This will properly update both the URL and the rendered content
        goto(redirectPath, { replaceState: true });
      }
    }
  }
  
  return {};
}
