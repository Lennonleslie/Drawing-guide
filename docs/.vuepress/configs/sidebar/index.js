export default {
    '/start/': [
      {
        text: "233入门",
        // 是否可折叠
        collapsible: true,
        children: [
          "", //此目录下的README.md
          '1',
          '2',
          '3',
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
