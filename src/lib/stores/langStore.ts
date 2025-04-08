import { writable } from 'svelte/store';

export type Locale = 'en' | 'sv';

const fallback: Locale = 'en';
const supportedLocales: Locale[] = ['en', 'sv'];

function detectLocale(): Locale {
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (supportedLocales.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }
  }
  return fallback;
}

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
const initial = (stored as Locale) ?? detectLocale();

export const langStore = writable<Locale>(initial);

// Persist changes
langStore.subscribe((val) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', val);
  }
});

