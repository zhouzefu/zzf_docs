import { defineConfig } from 'vitepress';

/**
 * 站点配置
 * 配置文档：https://vitepress.dev/zh/reference/site-config
 */
export default defineConfig({
  // 站点的标题
  title: "zhouzefu@126.com",
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标
  description: "zhouzefu@126.com",
  // 站点的语言。这将在页面 HTML 的 <html> 标签中呈现，并且将影响某些插件和组件的行为。
  lang: 'zh-CN',
  // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    aside: false,
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
      { icon: 'github', link: 'https://github.com/zhouzefu' },
    ],
    // 页脚配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lightModeSwitchTitle: '点击切换为日间模式',
    darkModeSwitchTitle: '点击切换为暗黑模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            }
          }
        }
      }
    },
    lastUpdatedText: '最后更新时间：',
  }
})
