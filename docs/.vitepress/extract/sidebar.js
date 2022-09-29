export default {
  '/business/': [
    {
      text: '业务方案',
      collapsible: true,
      items: [
        { text: '文件上传下载', link: '/business/uploadAndDown' },
        { text: '拖拽', link: '/business/drag' },
      ],
    },
  ],
  '/think/': [
    {
      text: '心得与日记',
      collapsible: true,
      items: [{ text: 'Index', link: '/think/' }],
    },
  ],
  '/guide/': [
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Index', link: '/guide/' },
        { text: 'One', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' },
      ],
    },
  ],
  '/config/': [
    {
      text: 'Config',
      collapsible: true,
      items: [
        { text: 'Index', link: '/config/' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' },
      ],
    },
  ],
}
