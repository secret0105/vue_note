import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 完整引入elememt plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 这里需要注释，否则会覆盖掉自定义的csss
// import './assets/main.css'

const app = createApp(App)

app.use(router).use(ElementPlus)

app.mount('#app')
