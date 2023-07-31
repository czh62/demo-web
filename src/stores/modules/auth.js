import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import DynamicRouter from '@/assets/json/dynamic-router.json'
import { getFlatArr, getShowMenuList } from '@/utils/util'

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

  // 这里引用的是本地json数据，开发中应该从后端获取
  const getDynamicMenuList = async () => {
    const { data } = DynamicRouter
    state.dynamicMenuList = data
  }

  return {
    ...toRefs(state),
    getTreeMenuList,
    getFilterMenuList,
    getFlatMenuList,
    getDynamicMenuList
  }
})

export default useAuthStore