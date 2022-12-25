export default {
  "./": [
    {
      text: "基础入门",
      children: ["/README.md"],
    },
    {
      text: "CentOS",
      collapsible: true,
      children: [
        "/CentOS/CentOS 显示欢迎语.md",
      ],
    },
    {
      text: "Web",
      collapsible: true,
      children: [
        "/Web/CSS 禁止文本选中.md",
      ],
    },
    {
      text: "游戏",
      collapsible: true,
      children: [
        {
          text: "Cocos",
          children: ["/游戏/Cocos/Cocos 网络请求.md"],
        },
        "/游戏/Phaser 游戏引擎中场景的生命周期.md",
      ],
    },
    {
      text: "其他",
      collapsible: true,
      children: [
        "/其他/给 Promise 实现 finally 方法.md",
      ],
    },
  ],
};
