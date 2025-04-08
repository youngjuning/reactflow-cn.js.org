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
    footer: `
<div>Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a></div>
<div>
  本页访问量 <span id="busuanzi_value_page_pv"></span> | 本站总访问量 <span id="busuanzi_value_site_pv"></span> | 本站总访人数 <span id="busuanzi_value_site_uv"></span>
</div>`,
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
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
    },
    {
      src: '/busuanzi.pure.mini.js',
      async: true,
      crossorigin: 'anonymous',
    },
  ],
});
