import router from '..'
import useAuthStore from '@/stores/modules/auth'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

const loadView = view => modules['/src/views' + view]

const initRouteComponent = routes => {
  return routes.filter(item => {
    if (item.component) {
      if (item.component === 'Layout') {
        item.component = Layout
      } else {
        item.component = loadView(item.component)
      }
    }
    if (item.children?.length) {
      initDynamicRouter(item.children)
    }
    return true
  })
}

const initDynamicRouter = async () => {
  const authStore = useAuthStore()
  await authStore.getDynamicMenuList()
  initRouteComponent(authStore.getTreeMenuList()).forEach(item => {
    if (item.meta.isFull) {
      router.addRoute(item)
    } else {
      router.addRoute('layout', item)
    }
  })
}

export default initDynamicRouter
