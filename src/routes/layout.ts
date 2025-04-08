// src/routes/+layout.ts
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
  const lang = url.searchParams.get('lang') ?? 'en';

  return {
    lang
  };
};

