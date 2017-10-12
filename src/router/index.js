import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login/login.vue'

import AllTask from '@/page/AllTask.vue'  //所有任务
import ManageTask from '@/page/ManageTask.vue' //编辑任务（在任务的详情界面编辑任务。前端做一个权限的划分）

import Sir from '@/page/Sir/index.vue' //一级路由
import AllPeople from '@/page/Sir/AllPeople.vue'
import NewTask from '@/page/Sir/NewTask.vue'
import OnePerson from '@/page/Sir/OnePerson.vue'



import Stu from '@/page/Stu/index.vue'
import MyTask from '@/page/Stu/MyTask.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {  path:'/login',
      component:login,
    },
    {
      path:'/Sir',
      component:Sir,
      children:[
        {path:'',component:AllTask},
        {path:'AllPeople',component: AllPeople},
        {path:'ManageTask',component:ManageTask},
        {path:'NewTask',component:NewTask},
        {path:'OnePerson',component:OnePerson},
      ]
    },
    {
      path:'/Stu',
      component:Stu,
      children:[
        {path:'',component:AllTask},
        {path:'MyTask',component:MyTask},
        {path:'ManageTask',component:ManageTask},
      ]
    }
  ]
})
