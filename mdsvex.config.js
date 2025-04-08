import { defineMDSveXConfig } from 'mdsvex';

const config = defineMDSveXConfig({
  extensions: ['.md', '.svx'],
  
  // Use ArticleLayout for all markdown files
  layout: {
    _: './src/lib/components/layouts/ArticleLayout.svelte'
  },
  
  // Make sure markdown frontmatter is properly extracted
  smartypants: {
    dashes: 'oldschool'
  },
  
  remarkPlugins: [],
  rehypePlugins: []
});

export default config;
