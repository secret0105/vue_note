import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 中转服务器
  server:{
    host:"0.0.0.0",
    // 通过代理解决跨域
    proxy:{
      "/api":{
        target: "http://127.0.0.1:9099/",
        changeOrigin:true,
        // 注意这里正则表达式不要用引号
        rewrite:(api) => api.replace(/^\/api/,"")
      }
    }
  }
})
