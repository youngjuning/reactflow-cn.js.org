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
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a><br/><div style="width:180px;margin: 0 auto"><script async type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=kvgeYP8qIu8lbwRcPtpsgFsJddybCkmKoAYKFHF6JY8"></script></div>`,
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
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous'}
  ]
});
