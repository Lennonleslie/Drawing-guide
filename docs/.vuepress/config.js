// vuepress配置
// import { defineUserConfig} from 'vuepress'
// 主题配置文件
// import { defaultTheme } from 'vuepress'
// 缩减写法
import { defineUserConfig, defaultTheme } from 'vuepress'
// 导入两个自定义配置文件
import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";

export default defineUserConfig({
    lang: 'zh-CN',

    title: '科道设计框架',

    description: '板式家具云指南',

    // base: '/Drawingguide/',

    base: '/',

    // 主题配置部分
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#colormode
    theme: defaultTheme({
        // 主页链接
        home:"www.kodocode.cn",

        navbar: navbar,

        sidebar: sidebar,
    }),
})
