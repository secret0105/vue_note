// 这里配置路由相关代码
// 导入vue-router
// 还需要在main.js中声明
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    // 动态参数路由
    {
        path: "/user/:id",
        component: User
    },
    // 捕获所有路由或者404
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, //简写
})

// 暴露路由
export default router