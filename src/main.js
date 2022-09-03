import { createApp } from 'vue'
import App from './views/App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

createApp(App).mount('#app')
