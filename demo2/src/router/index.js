// 这里配置路由相关代码
// 导入vue-router
// 还需要在main.js中声明
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import News from '../views/News.vue'

// 配置嵌套路由
import Parent from '../views/Parent.vue'
import One from '../views/One.vue'
import Two from '../views/Two.vue'

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
    // 对动态参数进行一些匹配
    {
        // 参数只能是数子，否则跳转到404
        // path: "/news/:id(\\d+)",
        // 匹配多个参数。即a/b/c形式
        // path: "/news/:id+",
        // 参数可选 * 号或者? 号都可以，？号只能匹配单个参数，不支持a/b/c
        path: "/news/:id*",
        component: News

    },
    // 嵌套路由
    {
        path: "/parent/:id*",
        component: Parent,
        children: [
            {
                path: "one",
                component: One
            },
            {
                path: "two",
                component: Two
            }
        ]
    },

    // 捕获所有路由或者404
    {
        // 正则表达式，官方写法，pathMatch可以是任意字符，最后一个*也可以省略
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