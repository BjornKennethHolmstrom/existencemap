// src/routes/+layout.js
import { browser } from '$app/environment';

export function load() {
  if (browser) {
    // Check if we need to redirect from a saved path (from 404.html)
    const redirectPath = sessionStorage.getItem('existencemap:redirect');
    if (redirectPath) {
      // Remove the stored path to prevent loops
      sessionStorage.removeItem('existencemap:redirect');
      
      // Navigate to the saved path if it's not the homepage
      if (redirectPath !== '/') {
        window.history.replaceState({}, '', redirectPath);
      }
    }
  }
  
  // Your existing load function contents, if any
  return {};
}
