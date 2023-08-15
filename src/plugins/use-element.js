import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import dark theme
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useAppStore from '@/stores/modules/app'

const useElement = app => {
  const appStore = useAppStore()

  app.use(ElementPlus, {
    locale: zhCn,
    size: appStore.size
  })
}

export default useElement
