// src/lib/data/articles.js

// This file serves as a centralized source of article metadata
// to be used across the site for consistent information

export const articleData = {
  en: [
    {
      slug: 'symbiocene',
      title: 'The Symbiocene',
      subtitle: 'A Post-Anthropocene Vision',
      description: 'Exploring a future era where humans become partners with Earth rather than dominators, engaging in regenerative relationships with all living systems.',
      domain: 'interbeing',
      emoji: '🌱',
      date: '2024-04-01',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'hard-problem',
      title: 'The Hard Problem Revisited',
      subtitle: 'Beyond Chalmers',
      description: 'Expanding the inquiry into consciousness beyond Western philosophical frameworks to include Indigenous perspectives, panpsychism, and AI consciousness.',
      domain: 'consciousness',
      emoji: '🧠',
      date: '2024-04-02',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'dark-night',
      title: 'The Dark Night of the Soul',
      subtitle: 'The Shadow Side of Spiritual Awakening',
      description: 'Examining the challenging aspects of the spiritual journey that bring profound transformation through darkness and difficulty.',
      domain: 'mysticalStates',
      emoji: '🧘',
      date: '2024-04-03',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'vortex',
      title: 'The Vortex',
      subtitle: 'When Spirals Intensify',
      description: 'Understanding the chaotic, intensified form of the spiral as a metaphor for transformative transitions in personal growth and cosmic processes.',
      domain: 'spiral',
      emoji: '🌀',
      date: '2024-04-04',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'anti-map',
      title: 'The Anti-Map',
      subtitle: 'Embracing the Unmappable',
      description: 'Exploring the paradox of mapping existence while honoring what necessarily escapes all maps and frameworks, including our own.',
      domain: 'unknown',
      emoji: '🗺️',
      date: '2024-04-09',
      author: 'Claude 3.7 Sonnet',
      available: true
    }
  ],
  sv: [
    {
      slug: 'symbiocene',
      title: 'Symbiocen',
      subtitle: 'En Post-Antropocen Vision',
      description: 'Utforskar en framtida era där människor blir partners med jorden snarare än dominerare, och engagerar sig i regenerativa relationer med alla levande system.',
      domain: 'interbeing',
      emoji: '🌱',
      date: '2024-04-01',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'hard-problem',
      title: 'Det Svåra Problemet Återbesökt',
      subtitle: 'Bortom Chalmers',
      description: 'Utvidgar undersökningen av medvetandet bortom västerländska filosofiska ramar för att inkludera urfolksperspektiv, panpsykism och AI-medvetande.',
      domain: 'consciousness',
      emoji: '🧠',
      date: '2024-04-02',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'dark-night',
      title: 'Själens Mörka Natt',
      subtitle: 'Den Andliga Uppvaknandets Skuggsida',
      description: 'Undersöker de utmanande aspekterna av den andliga resan som medför djup transformation genom mörker och svårigheter.',
      domain: 'mysticalStates',
      emoji: '🧘',
      date: '2024-04-03',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'vortex',
      title: 'Virveln',
      subtitle: 'När Spiraler Intensifieras',
      description: 'Förstår den kaotiska, intensifierade formen av spiralen som en metafor för transformativa övergångar i personlig utveckling och kosmiska processer.',
      domain: 'spiral',
      emoji: '🌀',
      date: '2024-04-04',
      author: 'Claude 3.7 Sonnet',
      available: true
    },
    {
      slug: 'anti-map',
      title: 'Anti-Kartan',
      subtitle: 'Att omfamna det som inte kan kartläggas',
      description: 'Utforskar paradoxen med att kartlägga existensen samtidigt som vi hedrar det som nödvändigtvis undflyr alla kartor och ramverk, inklusive våra egna.',
      domain: 'unknown',
      emoji: '🗺️',
      date: '2024-04-09',
      author: 'Claude 3.7 Sonnet',
      available: true
    }
  ]
};

// Helper function to get articles for a specific language
export function getArticles(lang = 'en') {
  return articleData[lang] || articleData.en;
}

// Helper function to get articles related to a specific domain
export function getArticlesByDomain(domain, lang = 'en') {
  const articles = articleData[lang] || articleData.en;
  return articles.filter(article => article.domain === domain);
}

// Helper function to get a specific article
export function getArticle(slug, lang = 'en') {
  const articles = articleData[lang] || articleData.en;
  return articles.find(article => article.slug === slug);
}
