import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'React Flow',
    logo: '/favicon.ico',
    prefersColor: { default: 'auto' },
    editLink:
      'https://github.com/youngjuning/reactflow-dev.js.org/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/reactflow-dev.js.org',
      twitter: 'https://twitter.com/luozhu2021',
    },
    hd: { rules: [] },
    footer:
      `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a><br/><div style="width:180px;margin: 0 auto"><script async type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=kvgeYP8qIu8lbwRcPtpsgFsJddybCkmKoAYKFHF6JY8"></script></div><br/><span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span></span> | <span id="busuanzi_container_site_uv">本站访客数<span id="busuanzi_value_site_uv"></span></span>`,
  },
  theme: {
    '@c-primary': '#FF0073',
  },
  publicPath: '/',
  analytics: {
    ga_v2: 'G-W512Y7N0FN',
  },
  // sitemap: {
  // hostname: 'https://reactflow-dev.js.org',
  // },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts:
    process.env.NODE_ENV !== 'development'
      ? [{ src: '/adsbygoogle.js', async: true, crossorigin: 'anonymous' }]
      : [],
  scripts:
    process.env.NODE_ENV !== 'development'
      ? [
          {
            async: true,
            src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
            crossorigin: 'anonymous'
          },
        ]
      : [],
});
