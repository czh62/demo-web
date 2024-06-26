import DynamicRouter from '@/assets/json/dynamic-router.json'
import { getFlatArr, getShowMenuList, getAllBreadcrumbList } from '@/utils/util'
import request from '@/utils/request'

const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    dynamicMenuList: []
  })

  // 服务器菜单列表
  const getTreeMenuList = () => state.dynamicMenuList

  // 过滤掉hidden的菜单列表
  const getFilterMenuList = () => getShowMenuList(state.dynamicMenuList)

  // 扁平后的菜单列表，用于添加动态路由
  const getFlatMenuList = () => getFlatArr(state.dynamicMenuList)

  // 从菜单列表获取面包屑列表，用于渲染面包屑组件
  const getBreadcrumblist = () => getAllBreadcrumbList(state.dynamicMenuList)

  // 获取动态菜单列表
  const getDynamicMenuList = async () => {
    const res = await request.post('/api/menuList')
    state.dynamicMenuList = res.data
  }

  return {
    ...toRefs(state),
    getTreeMenuList,
    getFilterMenuList,
    getFlatMenuList,
    getDynamicMenuList,
    getBreadcrumblist
  }
})

export default useAuthStore