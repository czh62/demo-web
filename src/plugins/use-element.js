import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const useElement = app => {
  app.use(ElementPlus, {
    locale: zhCn
  })
}

export default useElement
