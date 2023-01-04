// 这里是目录配置
export default {
  '/theory/': [
    {
      text: "理论基础",
      // 是否可折叠
      // collapsible: true,
      children: [
        '维度基础',
        '参数说明',
      ],
    },
    {
      text: "家具基础",
      // 是否可折叠
      // collapsible: true,
      children: [
        '信息基础',
      ],
    },
  ],
  '/start/': [
    {
      text: "基础入门",
      // 是否可折叠
      // collapsible: true,
      children: [
        '初步了解',
        '结构解析',
        '流程简解',
      ],
    },
  ],
  '/promote/': [
    {
      text: "进阶提升",
      // 是否可折叠
      // collapsible: true,
      children: [
        // 'DS王石',
        'CAD王石'
      ],
    },
  ],

  '/tool/': [
    // {
    //   text: "工具",
    //   collapsible: true,
    //   children: [
    //     {
    //       text: "电脑工具",
    //       children: [
    //         "常用电脑工具",
    //         "设计常用工具",
    //       ],
    //       text: "测量工具",
    //       children: [
    //         "常用电脑工具",
    //         "设计常用工具",
    //       ],
    //     },
    //   ],
    // },
  ],
};
