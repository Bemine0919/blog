import nav from './extract/nav'
import sidebar from './extract/sidebar'
export default {
  title: 'To see the cat',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/images/spider.png',
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/hzj1998' }],
    docFooter: {
      prev: 'back',
      next: 'next',
    },
    footer: {
      message: '京ICP备2022008057',
      copyright: 'Copyright © 2022-present Zijian He ',
    },
    lastUpdatedText: '上次更新时间',
  },
}
