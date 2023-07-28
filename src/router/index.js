import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/dashboard/index.vue'
import NProgress from '../plugins/use-nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

// 通过路由守卫开启/关闭页面进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
