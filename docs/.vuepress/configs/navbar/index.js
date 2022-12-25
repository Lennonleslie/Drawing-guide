export default [
  {
    text: '联系作者',
    children: [
      {
        text: "QQ/TIM", 
        link:''
        // link:'tencent://message/?uin=514800133&Site=&Menu=yes'
      },      {
        text: "514800133", 
        link:''
      },
      {
        text: "发送邮件", 
        link:'mailto:CODESci.Tech@111.com'
      },
      {
        text: "CODESci.Tech@111.com", 
        link:'mailto:CODESci.Tech@111.com'
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