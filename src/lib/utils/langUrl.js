// src/lib/utils/langUrl.js

/**
 * Adds the current language as a query parameter to a URL
 * @param {string} url - The URL to add the language parameter to
 * @param {string} lang - The language code
 * @returns {string} - The URL with language parameter
 */
export function addLangParam(url, lang) {
  // Skip if no language provided or it's the default language (English)
  if (!lang || lang === 'en') return url;
  
  // If the URL already has query parameters
  if (url.includes('?')) {
    // If it already has a lang parameter, replace it
    if (url.includes('lang=')) {
      return url.replace(/lang=[^&]+/, `lang=${lang}`);
    }
    // Otherwise, add it
    return `${url}&lang=${lang}`;
  }
  
  // If the URL has no query parameters, add it
  return `${url}?lang=${lang}`;
}
