import './style.css'
import { createApp } from 'vue'
import App from './components/AppIndex.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')