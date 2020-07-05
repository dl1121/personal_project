import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import users from '../components/user/users.vue'
import err404 from '../components/user/err404.vue'

//解决 Error: Avoided redundant navigation to current location: 报错信息
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  //路由重定向
  {
    path: '/',
    redirect:'/login'
  },

  //登录页
    {
      path: '/login',
      component:Login
  },

    
    //主页
  {
    path: '/home',
    component: home,
    redirect:'/welcome',
    children: [{
      path: '/welcome',
      component: welcome,
      
    },
      //展示用户列表
      {
        path: '/users',
        component:users
      },
            //404页面
  {
    path: '/err404',
    component:err404
      },
  
      
    ]
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
