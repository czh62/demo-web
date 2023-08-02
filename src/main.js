import 'virtual:svg-icons-register'
import './assets/styles/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import store from './stores'
import router from './router'

import useElement from './plugins/use-element'
import useIcons from './plugins/use-icons'

const app = createApp(App)

app.use(store)
app.use(router)

useElement(app)
useIcons(app)

app.mount('#app')
