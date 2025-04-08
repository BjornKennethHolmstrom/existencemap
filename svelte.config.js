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
      fallback: 'index.html', // Enable SPA mode
      precompress: false
    }),
    // Use different base paths for development vs production
    paths: {
      base: ''
    }
  }
};

export default config;
