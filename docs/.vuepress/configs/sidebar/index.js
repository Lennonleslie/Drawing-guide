// 这里是目录配置
export default {
  '/theory/': [
    {
      text: "理论基础",
      // 是否可折叠
      // collapsible: true,
      children: [
        '/theory/维度基础',
        '/theory/参数说明',
      ],
    },
    {
      text: "户型柜体",
      // 是否可折叠
      // collapsible: true,
      children: [
        '/theory/room/卧室系列',
        '/theory/room/衣帽间系列',
        '/theory/room/厨卫系列',
        '/theory/room/客餐厅系列',
        '/theory/room/入户系列',
        '/theory/room/护墙门系列',
      ],
    },
  ],
  '/start/': [
    {
      text: "基础入门",
      // 是否可折叠
      // collapsible: true,
      children: [
        '/start/初步了解',
        '/start/结构解析',
        '/start/流程简解',
      ],
    },
    {
      text: "柜体说明",
      // 是否可折叠
      // collapsible: true,
      children: [
        '/start/cabinet/衣柜',
        '/start/cabinet/功能柜',
        '/start/cabinet/橱柜',
        '/start/cabinet/护墙',
        '/start/cabinet/门',
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
