export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/favicon.png\",\"heroText\":\"igloo's document\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/Guide/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Note\",\"details\":\"Markdown-centered notes that record every moment succinctly and efficiently\"},{\"title\":\"Blog\",\"details\":\"Clean and tidy blog, easy to archive files\"},{\"title\":\"Document\",\"details\":\"Online personal documentation, make the desired documentation\"}],\"footer\":\"MIT Licensed | Copyright © 2016-present Passwordgloo\"},\"headers\":[],\"git\":{\"updatedTime\":1671550330000,\"contributors\":[{\"name\":\"lennonleslie\",\"email\":\"lennon.leslie@hotmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
