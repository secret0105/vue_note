import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 导入路由,不需要指定到index.js,系统会默认去寻找
import router from './router'

// 使用链式
createApp(App).use(router).mount('#app')
