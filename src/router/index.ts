import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from "@/views/Main.vue";
import House from "@/views/House.vue";
import AddHouse from "@/views/AddHouse.vue";
import Address from "@/components/addHouse/Address.vue";
import Login from "@/views/Login.vue";
import UserCenter from "@/views/UserCenter.vue";
import UserCenterHome from "@/components/userCenter/Home.vue"
import History from "@/components/userCenter/History.vue";
import Collect from "@/components/userCenter/Collect.vue";
import Release from "@/components/userCenter/Release.vue";
import Avatar from "@/components/userCenter/Avatar.vue";
import Search from "@/views/Search.vue"
import {UserStore} from "@/stores/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:"/index",
      children:[
        {path:'/index',component:Main},
        {path:'/house',component:House},
        {path:'/addHouse',component:AddHouse},
        {path:'/userCenter',component:UserCenter,children:[
            {path:'/userCenter/home',component:UserCenterHome},
            {path:'/userCenter/history',component:History},
            {path:'/userCenter/collect',component:Collect},
            {path:'/userCenter/release',component:Release},
            {path:'/userCenter/avatar',component:Avatar}
          ]},
        {path:'/search', name:'Search',component:Search}
      ]
    },
    {path:'/login',name:'login',component:Login}
  ]
})

router.beforeEach((to,from)=>{

    const userStore = UserStore()

    // 判断用户是否登陆
    if (to.path.indexOf("/userCenter") !== -1){
        if (userStore.loginOrNot){
            return true
        }
        return '/'
    }
    return true
})

export default router
