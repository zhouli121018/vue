import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Index from '@/components/Index'
import MyChart from '@/components/MyChart'
import ProductList from '@/components/ProductList'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'/',
          component:MyChart
        },
        {
          path:'/myChart',
          component:MyChart
        },
        {
          path:'/productList',
          component:ProductList
        },
        {
          path:'/userList',
          component:UserList
        }
      ]
    }
    
  ]
})
