// 创建一个路由器，并暴露出去

import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      name:'home123',
      path:'/home',
      component:Home
    },
    {
      name:'about123',
      path:'/about',
      component:About
    },
    {
      name:'news123',
      path:'/news',
      component:News,
      children:[
        {
          name:'detail123',
          path:'detail/:id/:title/:content',
          component:Detail,
          // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
          // props:{a:1,b:2,c:3},

          // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
          // props:true

          // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
          // props(route){
          //   return route.query
          // }
          props:true
        }
      ]
    }
  ]
})

export default router
