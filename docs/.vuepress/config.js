const path = require('path')
module.exports = {
  title: 'VuePress-DEMO文档',
  description: '',
  palette: path.resolve(__dirname, 'palette.styl'),
  themeConfig : {
    nav : [
        { text: '菜单1', link: '/nav1/sidebar1/' },
        { text: '菜单2', link: '/nav2/sidebar1/' },
        { text: '菜单3', link: '' }
    ],
    sidebar: {
      '/nav1/': getNav1Sidebar(),
      '/nav2/': getNav2Sidebar()
    }
  }
}

function getNav1Sidebar() {
  console.log('获得菜单1')
  return [
    {
      title: '菜单1-项目1',   // 必要的
      path: '/nav1/sidebar1/',      // 可选的, 应该是一个绝对路径
      collapsable: true, // 可选的, 默认值是 true,
      children: []
    },
    {
      title: '菜单1-项目2',
      path: '/nav1/sidebar2/',
      collapsable: true,
      children: []
    },
  ]
}
function getNav2Sidebar () {
  return [
    {
      title: '菜单2-项目1',
      path: '/nav2/sidebar1/',
      collapsable: false,
      children: [
        {
          title:'文章1',
          path: '/nav2/sidebar1/article1/',
        },
        {
          title: '文章2',
          path: '/nav2/sidebar1/article2/',
          collapsable: true,
          children: []
        },
      ]
    }
  ]
}
