import { defineConfig } from 'vitepress';

const base_url = '/zzf-docs';

/**
 * 站点配置
 * 配置文档：https://vitepress.dev/zh/reference/site-config
 */
export default defineConfig({
  // 站点的标题
  title: "zhouzefu@126.com",
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标
  description: "zhouzefu@126.com",
  // 要在页面 HTML 的 <head> 标签中呈现的其他元素。用户添加的标签在结束 head 标签之前呈现，在 VitePress 标签之后。
  head: [
    ['link', { rel: 'stylesheet', href: `${base_url}/app.css` }]
  ],
  // 站点的语言。这将在页面 HTML 的 <html> 标签中呈现，并且将影响某些插件和组件的行为。
  lang: 'zh-CN',
  // 站点的基础路径。如果你将你的站点部署到 https://foo.github.io/bar/，那么 base 应该设置为 "/bar/"，以正确地解析所有相对 URL。
  base: base_url,
  // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    // 可以自定义此项以替换导航中的默认站点标题 (应用配置中的 title)。
    siteTitle: 'zhouzefu@126.com',
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/mine/resume' },
      { text: '项目列表', link: '/projects/project-list' },
    ],
    logo: '/images/avatar.png',
    footer: {
      message: '邮箱：zhouzefu@126.com | 微信：_zhouzefu | 手机号：156-0027-6210',
      copyright: `版权 © 2023-${new Date().getFullYear()} | 中国 · 宁波 | 中国 · 贵州`
    },
    // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhouzefu/zzf_docs' },
    ],
    // 页脚配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lightModeSwitchTitle: '点击切换为日间模式',
    darkModeSwitchTitle: '点击切换为暗黑模式',
    search: {
      provider: 'local'
    }
  }
})
