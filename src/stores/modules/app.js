import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import usePersistedstate from '@/plugins/use-persistedstate'

const useAppStore = defineStore('app', () => {
  const state = reactive({
    collapsed: false
  })

  const collapsedChange = () => {
    state.collapsed = !state.collapsed
  }

  return {
    ...toRefs(state),
    collapsedChange
  }
}, {
  persist: usePersistedstate('app')
})

export default useAppStore
