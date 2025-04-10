import common_en from '$i18n/en/common.json';
import footer_en from '$i18n/en/footer.json';
import home_en from '$i18n/en/home.json';
import about_en from '$i18n/en/about.json';
import credits_en from '$i18n/en/credits.json';
import map_en from '$i18n/en/map.json';
import map_nav_en from '$i18n/en/map_nav.json';
import map_consciousness_en from '$i18n/en/map_consciousness.json';
import map_mysticalStates_en from '$i18n/en/map_mysticalStates.json';
import map_development_en from '$i18n/en/map_development.json';
import map_interbeing_en from '$i18n/en/map_interbeing.json';
import map_unknown_en from '$i18n/en/map_unknown.json';
import map_cosmos_en from '$i18n/en/map_cosmos.json';
import map_reflection_en from '$i18n/en/map_reflection.json';
import map_spiral_en from '$i18n/en/map_spiral.json';
import map_feminine_en from '$i18n/en/map_feminine.json';
import map_other_en from '$i18n/en/map_other.json';
import map_beyond_religion_en from '$i18n/en/map_beyond_religion.json';
import map_timelessness_en from '$i18n/en/map_timelessness.json';
import articles_en from '$i18n/en/articles.json';
import contact_en from '$i18n/en/contact.json';
import share_en from '$i18n/en/share.json';
import spiral_dynamics_en from '$i18n/en/spiral_dynamics.json';

import common_sv from '$i18n/sv/common.json';
import footer_sv from '$i18n/sv/footer.json';
import home_sv from '$i18n/sv/home.json';
import about_sv from '$i18n/sv/about.json';
import credits_sv from '$i18n/sv/credits.json';
import map_sv from '$i18n/sv/map.json';
import map_nav_sv from '$i18n/sv/map_nav.json';
import map_consciousness_sv from '$i18n/sv/map_consciousness.json';
import map_mysticalStates_sv from '$i18n/sv/map_mysticalStates.json';
import map_development_sv from '$i18n/sv/map_development.json';
import map_interbeing_sv from '$i18n/sv/map_interbeing.json';
import map_unknown_sv from '$i18n/sv/map_unknown.json';
import map_cosmos_sv from '$i18n/sv/map_cosmos.json';
import map_reflection_sv from '$i18n/sv/map_reflection.json';
import map_spiral_sv from '$i18n/sv/map_spiral.json';
import map_feminine_sv from '$i18n/sv/map_feminine.json';
import map_other_sv from '$i18n/sv/map_other.json';
import map_beyond_religion_sv from '$i18n/sv/map_beyond_religion.json';
import map_timelessness_sv from '$i18n/sv/map_timelessness.json';
import articles_sv from '$i18n/sv/articles.json';
import contact_sv from '$i18n/sv/contact.json';
import share_sv from '$i18n/sv/share.json';
import spiral_dynamics_sv from '$i18n/sv/spiral_dynamics.json';

const translations = {
  en: {
    common: common_en,
    footer: footer_en,
    home: home_en,
    about: about_en,
    credits: credits_en,
    map: map_en,
    map_nav: map_nav_en,
    map_consciousness: map_consciousness_en,
    map_mysticalStates: map_mysticalStates_en,
    map_development: map_development_en,
    map_interbeing: map_interbeing_en,
    map_unknown: map_unknown_en,
    map_cosmos: map_cosmos_en,
    map_reflection: map_reflection_en,
    map_spiral: map_spiral_en,
    map_feminine: map_feminine_en,
    map_other: map_other_en,
    map_beyond_religion: map_beyond_religion_en,
    map_timelessness: map_timelessness_en,
    articles: articles_en,
    contact: contact_en,
    share: share_en,
    spiral_dynamics: spiral_dynamics_en,

  },
  sv: {
    common: common_sv,
    footer: footer_sv,
    home: home_sv,
    about: about_sv,
    credits: credits_sv,
    map: map_sv,
    map_nav: map_nav_sv,
    map_consciousness: map_consciousness_sv,
    map_mysticalStates: map_mysticalStates_sv,
    map_development: map_development_sv,
    map_interbeing: map_interbeing_sv,
    map_unknown: map_unknown_sv,
    map_cosmos: map_cosmos_sv,
    map_reflection: map_reflection_sv,
    map_spiral: map_spiral_sv,
    map_feminine: map_feminine_sv,
    map_other: map_other_sv,
    map_beyond_religion: map_beyond_religion_sv,
    map_timelessness: map_timelessness_sv,
    articles: articles_sv,
    contact: contact_sv,
    share: share_sv,
    spiral_dynamics: spiral_dynamics_sv,

  }
};

export type Locale = keyof typeof translations;

export function getTranslation(locale: Locale, namespace: keyof typeof translations['en']) {
  const fallback = translations['en'];
  const selected = translations[locale as Locale] ?? fallback;

  return selected[namespace] ?? fallback[namespace];
}
