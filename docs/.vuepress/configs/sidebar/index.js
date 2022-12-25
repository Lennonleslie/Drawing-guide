export default {
    '/start/': [
      {
        text: "基础入门",
        // 是否可折叠
        collapsible: true,
        children: [
          '数学逻辑',
          '结构解析',
          '流程详解',
        ],
      },
    ],
    '/promote/': [
      {
        text: "进阶提升",
        // 是否可折叠
        collapsible: true,
        children: [
        ],
      },
    ],

    '/tool/': [      
    {
      text: "工具",
      collapsible: true,
      children: [
        {
          text: "电脑工具",
          children: ["常用电脑工具.md"],
        },
        "设计常用工具.md",
      ],
    },
    ],
};
