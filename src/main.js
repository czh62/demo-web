import 'virtual:svg-icons-register'
import './assets/styles/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import store from './stores'
import router from './router'

import useIcons from './plugins/use-icons'
import i18n from './plugins/use-languages'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n())

useIcons(app)

app.mount('#app')
