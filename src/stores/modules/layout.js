import usePersistedstate from '@/plugins/use-persistedstate'

const useLayoutStore = defineStore('layout', () => {
  const state = reactive({
    showLogo: true,
    showFooter: true,
    showHeader: true,
    showTagsView: true,
    showWelcome: true,
  })

  return {
    ...toRefs(state)
  }
}, {
  persist: usePersistedstate('layout')
})

export default useLayoutStore