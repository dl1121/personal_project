import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  //路由重定向
  {
    path: '/',
    redirect:'/login'
  },
  
    {
      path: '/login',
      component:Login
  },
  {
    path: '/home',
    component:home
},
    
]

const router = new VueRouter({
  routes
})

      
     
//挂在路由导航
router.beforeEach((to, from, next)=>{
  /**
   *to:即将方问的路径      
   *from：从哪个路径跳转而来 
   *next：函数 
   **/
  
  if (to.path === '/login')
    return next()
  
  //获得token
  const tonkerStr = window.sessionStorage.getItem('token')
  if (!tonkerStr)
    return next('/login')
  next()
  
})


export default router
