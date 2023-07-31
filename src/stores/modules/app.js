import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'

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
})

export default useAppStore
