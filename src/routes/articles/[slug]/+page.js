// src/routes/articles/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { langStore } from '$lib/stores/langStore';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, url, depends }) {
  const { slug } = params;
  
  // IMPORTANT: Listen for language changes
  depends('app:lang');
  
  // Get the language from both sources
  const urlLang = url.searchParams.get('lang');
  const storeLang = get(langStore);
  
  // Use URL language if present, otherwise use store language
  const lang = urlLang || storeLang || 'en';
  
  console.log(`Loading article: ${slug} in language: ${lang}`);
  console.log(`URL lang: ${urlLang}, Store lang: ${storeLang}`);
  
  try {
    // Try to load the article in the requested language
    try {
      console.log(`Attempting to import: ../../../lib/content/articles/${lang}/${slug}.md`);
      const module = await import(`../../../lib/content/articles/${lang}/${slug}.md`);
      
      console.log('Successfully loaded article in requested language');
      return {
        content: module.default,
        meta: {
          ...(module.metadata || {}),
          isLanguageFallback: false
        }
      };
    } catch (e) {
      console.error(`Error loading article in ${lang}:`, e.message);
      
      // If the article doesn't exist in the requested language, try English as fallback
      if (lang !== 'en') {
        try {
          console.log('Attempting to load English version as fallback');
          const module = await import(`../../../lib/content/articles/en/${slug}.md`);
          
          console.log('Successfully loaded English fallback');
          return {
            content: module.default,
            meta: {
              ...(module.metadata || {}),
              isLanguageFallback: true,
              requestedLanguage: lang
            }
          };
        } catch (fallbackError) {
          console.error('Article not found in fallback language:', fallbackError.message);
          throw error(404, 'Article not found (fallback failed)');
        }
      } else {
        console.error('Article not found and no fallback available');
        throw error(404, 'Article not found');
      }
    }
  } catch (e) {
    console.error('Failed to load article:', e.message);
    throw error(404, 'Article not found');
  }
}
