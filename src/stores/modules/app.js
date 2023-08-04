import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import usePersistedstate from '@/plugins/use-persistedstate'

const useAppStore = defineStore('app', () => {
  const state = reactive({
    collapsed: false,
    language: 'zh-CN'
  })

  const collapsedChange = () => {
    state.collapsed = !state.collapsed
  }

  const translate = language => {
    state.language = language
  }

  return {
    ...toRefs(state),
    collapsedChange,
    translate
  }
}, {
  persist: usePersistedstate('app')
})

export default useAppStore
