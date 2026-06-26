// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = node.properties.decoding || 'async';
      }
    });
  };
}

// https://astro.build/config

export default defineConfig({
  site: 'https://www.kingfisherofbaltiza.co.uk',
  integrations: [mdx(), sitemap({
    filter: (page) => ![
      '/subscribe-success/',
      '/confirm-subscription/',
      '/404/',
    ].some(p => page.includes(p)),
  })],
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});