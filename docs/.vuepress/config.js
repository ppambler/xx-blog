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
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'Tools', items: [
          { text: 'VuePress', link: '/tools/vuepress/' },
          { text: 'Gulp', link: '/tools/gulp/' }
        ]
      },
      {
        text: 'JavaScript', items: [
          { text: 'JS', link: '/js/normal/' },
          { text: '译', link: '/js/translation/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/ppambler/blog' },
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