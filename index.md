---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: zhouzefu@126.com
hero:
  name: "zhouzefu@126.com"
  tagline: <div class="my-desc">Hi，我是一名 <span class="skill">NodeJS</span> 全栈应用独立开发者🧑‍💻！</div>
  image:
    src: /images/avatar.png
    alt: VitePress
  actions:
    - theme: brand
      text: 个人简历
      link: /mine/resume
    - theme: alt
      text: 项目列表
      link: /projects/project-list
features:
  - icon: 🪧
    title: 商品
    details: 商品，是当物品摆上货架时，销售的价格，人也一样
  - icon: 🕊️
    title: 产品
    details: 产品，是人的延伸、人的需求、人的欲望、人的梦想
  - icon: 🐲
    title: 程序
    details: 程序，是销售思维逻辑和数据的可视化窗口
  - icon: 🦄
    title: 安全
    details: 安全，是昨晚一块钱的面包，和早上十块钱的牛奶
---

<style> 
.my-desc {
    font-size: 16px;
    animation: typing 4s steps(40) infinite; 
    overflow: hidden;
    white-space: nowrap;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
} 
.my-desc .skill {
    background: linear-gradient(to bottom, #833ab4 100%, #fcb045 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.title{
  font-size: 14px !important; 
}

.medium{
  font-weight: normal !important; 
}
 
.details{
  font-size: 14px !important;
}

.details{
  font-size: 14px !important;
}
</style>
