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
      text: "柜体分类",
      // 是否可折叠
      // collapsible: true,
      children: [
        '/theory/cabinet/衣柜',
        '/theory/cabinet/功能柜',
        '/theory/cabinet/橱柜',
        '/theory/cabinet/护墙',
        '/theory/cabinet/门',
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
