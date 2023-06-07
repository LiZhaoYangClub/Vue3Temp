import 'virtual:svg-icons-register'
import '@/styles/tailwind.css'
import '@/styles/reset.css'
// 弹窗需额外引入
// custom element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/theme/dark.scss'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

import router from '@/routers'
import pinia from '@/stores'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
