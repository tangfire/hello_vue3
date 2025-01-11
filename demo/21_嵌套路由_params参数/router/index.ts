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
          // 加?代表可传可不传
          path:'detail/:id/:title/:content?',
          component:Detail
        }
      ]
    }
  ]
})

export default router
