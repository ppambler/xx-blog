const path = require('path')
module.exports = {
  base: '/blog/',
  title: '☀️ Blog',
  description: 'my blog',
  head: [
    ['link', { rel: 'icon', href: '//avatars3.githubusercontent.com/u/36479648?s=40&v=4' }],
  ],
  dest: './docs-dist',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Tools', link: '/Tools/' },
      { text: 'GitHub', link: 'https://github.com/ppambler/blog' },
    ],
    sidebar: [
      {
        title: 'Tools',   // 必要的
        path: '/tools/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          {
            title: 'VuePress',
            path: '/tools/vuepress/',
            sidebarDepth: 2,
            children: [
              '/tools/vuepress/faq',
              '/tools/vuepress/01',
              '/tools/vuepress/02',
            ]
          },
          {
            title: 'Gulp',
            path: '/tools/gulp/',
            sidebarDepth: 2,
            children: [
              '/tools/gulp/01',
            ]
          }
        ]
      }
    ],
  },
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // markdown-it-checkbox 的选项
    checkbox: {
      disabled: true,
      divWrap: false,
      divClass: 'checkbox',
      idPrefix: 'cbx_',
      ulClass: 'task-list',
      liClass: 'task-list-item'
    },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-checkbox'))
    }
  },
  extraWatchFiles: [
    '/.vuepress/config.js', // 使用相对路径
  ]
}