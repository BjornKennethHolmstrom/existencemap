import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $i18n: path.resolve('./src/lib/i18n'),
    }
  },
  // Define default environment variables
  define: {
    // Provide fallback for PUBLIC_BASE_PATH if not defined
    'import.meta.env.PUBLIC_BASE_PATH': JSON.stringify(process.env.PUBLIC_BASE_PATH || '')
  }
});
