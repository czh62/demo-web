import { createRouter, createWebHistory } from 'vue-router'
import { errorRouter, staticRouter } from './modules/static-router'
import initDynamicRouter from './modules/dynamic-router'
import NProgress from '@/plugins/use-nprogress'
import useAuthStore from '@/stores/modules/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...staticRouter, ...errorRouter]
})

// 通过路由守卫开启/关闭页面进度条
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const authStore = useAuthStore()
  if (authStore.dynamicMenuList.length === 0) {
    await initDynamicRouter()
    next({ ...to, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

router.onError(() => {
  NProgress.done()
})

export default router
