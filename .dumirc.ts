import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'React Flow',
    logo: '/favicon.ico',
    prefersColor: { default: 'auto' },
    editLink:
      'https://github.com/youngjuning/reactflow-cn.js.org/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/reactflow-cn.js.org',
      twitter: 'https://twitter.com/luozhu2021',
    },
    hd: { rules: [] },
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a><br/><div style="width:180px;margin: 0 auto"></div>`,
  },
  styles: [
    `ins.adsbygoogle[data-ad-status=unfilled] {
      display: none !important;
    }`,
  ],
  theme: {
    '@c-primary': '#FF0073',
  },
  publicPath: '/',
  analytics: {
    ga_v2: 'G-W512Y7N0FN',
  },
  sitemap: {
    hostname: 'https://reactflow-cn.js.org',
  },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts:
    process.env.NODE_ENV !== 'development'
      ? [{ src: '/adsbygoogle.js', async: true, crossorigin: 'anonymous' }]
      : [],
});
