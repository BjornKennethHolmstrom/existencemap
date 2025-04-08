import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  
  preprocess: [
    mdsvex(mdsvexConfig)
  ],
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // SPA mode
      precompress: false
    }),
    
    // Important for client-side routing
    trailingSlash: 'never',
    
    // Ensure paths are properly configured
    paths: {
      base: ''
    }
  }
};

export default config;
