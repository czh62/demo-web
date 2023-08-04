import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'

const useLayoutStore = defineStore('layout', () => {
  const state = reactive({
    showLogo: false,
    showFooter: false,
    showHeader: true,
    showVersion: false,
    showTagsView: true
  })

  return {
    ...toRefs(state)
  }
})

export default useLayoutStore