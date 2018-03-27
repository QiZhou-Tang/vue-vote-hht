import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Home from '@/components/home'
import Help from '@/components/pages/hepl.vue'
import Tike from '@/components/pages/tike.vue'
import Login from '@/components/login/login.vue'
import Vote from '@/components/DemoErrorModal.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/help',
      component: Help,
    },
    {
      path: '/tike',
      component: Tike
    },
    {
      path: '/login',
      component: Login,
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限

    console.log("路由获取值：", store.state);
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})


export default router;
