// src/routes/+layout.js
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  if (browser) {
    console.log('Layout.js executing, current path:', url.pathname);
    
    // Handle GitHub Pages SPA routing
    const redirectPath = sessionStorage.getItem('existencemap:redirect');
    
    if (redirectPath && redirectPath !== '/') {
      console.log('Found stored path:', redirectPath);
      
      // Clear stored path immediately
      sessionStorage.removeItem('existencemap:redirect');
      
      // Only redirect if we're actually on the home page
      if (url.pathname === '/') {
        console.log('Redirecting to:', redirectPath);
        
        // Use the most direct approach - immediate redirect
        window.location.replace(redirectPath);
        return {}; // Stop execution since we're redirecting
      }
    }
  }
  
  return {};
}
