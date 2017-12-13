import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '杨春来',
    menus:[
                           {
      id:1,
      name:'Dashboard',
      path:'dashboard',
      icon:'el-icon-date',
      title:'Dashboard',
      children:[]
  },
  {
      id:2,
      name:'Control',
      path:'control',
      icon:'el-icon-location',
      title:'组件',
      children:[
          {
            id:3,
            name:'Form',
            path:'form',
            icon:'',
            title:'表单',
            children:[]
          },
          {
            id:4,
            name:'Table',
            path:'table',
            icon:'',
            title:'表格',
            children:[]
          },
          {
            id:5,
            name:'Vuextest',
            path:'vuextest',
            icon:'',
            title:'vuex测试',
            children:[]
          },
          {
            id:6,
            name:'Slide',
            path:'slide',
            icon:'',
            title:'跑马灯',
            children:[]
          },
          {
            id:7,
            name:'Notify',
            path:'notify',
            icon:'',
            title:'通知',
            children:[]
          },
          {
            id:8,
            name:'Collapse',
            path:'collapse',
            icon:'',
            title:'折叠面板',
            children:[]
          },
          {
            id:3,
            name:'Form',
            path:'form',
            icon:'',
            title:'表单',
            children:[]
          },
          {
            id:4,
            name:'Table',
            path:'table',
            icon:'',
            title:'表格',
            children:[]
          },
          {
            id:5,
            name:'Vuextest',
            path:'vuextest',
            icon:'',
            title:'vuex测试',
            children:[]
          },
          {
            id:6,
            name:'Slide',
            path:'slide',
            icon:'',
            title:'跑马灯',
            children:[]
          },
          {
            id:7,
            name:'Notify',
            path:'notify',
            icon:'',
            title:'通知',
            children:[]
          },
          {
            id:8,
            name:'Collapse',
            path:'collapse',
            icon:'',
            title:'折叠面板',
            children:[]
          },
          {
            id:9,
            name:'Dialog',
            path:'dialog',
            icon:'',
            title:'对话框',
            children:[]
          },
          {
            id:10,
            name:'Upload',
            path:'upload',
            icon:'',
            title:'文件上传',
            children:[]
          },
          {
            id:11,
            name:'Test1',
            path:'',
            icon:'',
            title:'测试1',
            children:[
               {
                id:12,
                name:'Test2',
                path:'test2',
                icon:'',
                title:'测试2',
                children:[]
               }
            ]
          }
      ]
  },
  {
      id:13,
      name:'Notfound',
      path:'notfound',
      icon:'el-icon-menu',
      title:'404页',
      children:[]
  },
  {
      id:14,
      name:'Login',
      path:'login',
      icon:'el-icon-circle-check',
      title:'登录页',
      children:[]
  },
  {
      id:15,
      name:'System',
      path:'system',
      icon:'el-icon-setting',
      title:'系统管理',
      children:[
          {
            id:16,
            name:'Department',
            path:'department',
            icon:'',
            title:'部门管理',
            children:[]
          },
          {
            id:17,
            name:'Employee',
            path:'employee',
            icon:'',
            title:'员工管理',
            children:[]
          },
          {
            id:18,
            name:'User',
            path:'user',
            icon:'',
            title:'帐号管理',
            children:[]
          },
          {
            id:19,
            name:'RoleAuth',
            path:'',
            icon:'',
            title:'权限管理',
            children:[
               {
                 id:20,
                 name:'Role',
                 path:'role',
                 icon:'',
                 title:'角色',
                 children:[]
               },
               {
                 id:21,
                 name:'Auth',
                 path:'auth',
                 icon:'',
                 title:'权限',
                 children:[]
               }
            ]
          }
      ]
      }
    ]
  }
]

const LoginUsers2 = [
  {
    id: 1,
    username: 'guest',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '杨春来2',
    menus:[
       {
          id:1,
          name:'Dashboard',
          path:'dashboard',
          icon:'el-icon-date',
          title:'Dashboard',
          children:[]
       },
       {
      id:15,
      name:'System',
      path:'system',
      icon:'el-icon-setting',
      title:'系统管理',
      children:[
          {
            id:16,
            name:'Department',
            path:'department',
            icon:'',
            title:'部门管理',
            children:[]
          },
          {
            id:17,
            name:'Employee',
            path:'employee',
            icon:'',
            title:'员工管理',
            children:[]
          },
          {
            id:18,
            name:'User',
            path:'user',
            icon:'',
            title:'帐号管理',
            children:[]
          },
          {
            id:19,
            name:'RoleAuth',
            path:'',
            icon:'',
            title:'权限管理',
            children:[
               {
                 id:20,
                 name:'Role',
                 path:'role',
                 icon:'',
                 title:'角色',
                 children:[]
               },
               {
                 id:21,
                 name:'Auth',
                 path:'auth',
                 icon:'',
                 title:'权限',
                 children:[]
               }
            ]
          }
      ]
      }
    ]
  }
 ]

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers,LoginUsers2,Users };
