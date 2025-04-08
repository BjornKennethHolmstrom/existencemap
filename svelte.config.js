import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  
  // Use both preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: ''
    },
    alias: {
      $i18n: 'src/lib/i18n'
    },
    // Add hash-based routing
    trailingSlash: 'never',
    paths: {
      base: '',
      relative: false
    },
    prerender: {
      entries: []
    }
  }
};

export default config;
