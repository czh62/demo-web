import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import DynamicRouter from '@/assets/json/dynamic-router.json'

const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    dynamicMenuList: []
  })

  const getTreeMenuList = () => state.dynamicMenuList

  // 这里引用的是本地json数据，开发中应该从后端获取
  const getDynamicMenuList = async () => {
    const { data } = DynamicRouter
    state.dynamicMenuList = data
  }

  return {
    ...toRefs(state),
    getTreeMenuList,
    getDynamicMenuList
  }
})

export default useAuthStore