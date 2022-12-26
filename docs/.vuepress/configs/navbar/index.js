export default [
  {
    text: '学习导航',
    children: [
      {
        text: "基础入门",
        link: '/start/初步了解.md'
      },
      {
        text: "进阶提升",
        link: '/promote/'
      },
    ],
  },
  {
    text: '联系作者',
    children: [
      {
        text: "QQ/TIM:  514800133",
        link: '/'
        // link:'tencent://message/?uin=514800133&Site=&Menu=yes'
      }, 
      {
        text: "发送邮件",
        link: 'mailto:KODOCODE@outlook.com'
      },
      {
        text: "KODOCODE@outlook.com",
        link: 'mailto:KODOCODE@outlook.com'
      },
    ],
  },
  {
    text: '快捷链接',
    children: [
      {
        text: "官网",
        link: 'https://www.kodocode.cn/'
      },
      {
        text: "DS王石",
        link: 'https://ds.wongshek.cn/'
      },
    ],
  }
  /*       // 嵌套 Group - 最大深度为 2
        {
          text: 'Group',
          children: [
            {
              text: 'SubGroup',
              children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            },
          ],
        },
        // 控制元素何时被激活
        {
          text: 'Group 2',
          children: [
            {
              text: 'Always active',
              link: '/',
              // 该元素将一直处于激活状态
              activeMatch: '/',
            },
            {
              text: 'Active on /foo/',
              link: '/not-foo/',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            },
          ],
        }, */
]