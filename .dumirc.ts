import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://reactflow.dev/img/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'React Flow',
    logo: 'https://reactflow.dev/img/favicon.ico',
    prefersColor: { default: 'auto' },
    editLink: "https://github.com/youngjuning/reactflow-cn.js.org/edit/main/{filename}",
    socialLinks: {
      github: 'https://github.com/youngjuning/reactflow-cn.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a>'
  },
  theme: {
    '@c-primary': '#FF0073',
  },
  publicPath: '/',
  // analytics: {
    // ga_v2: '',
  // },
  // sitemap: {
    // hostname: 'https://reactflow-cn.js.org',
  // },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5641491107630454', async: true, crossorigin: 'anonymous'},
    {src: 'https://pagead2.googlesyndication.com/pagead/show_ads.js', async: true, crossorigin: 'anonymous'},
  ]
});
