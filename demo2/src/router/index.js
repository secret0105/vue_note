// 这里配置路由相关代码
// 导入vue-router
// 还需要在main.js中声明
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 下面都是静态导入，每次都会加载全部组件，开销大

// import Home from '../views/Home.vue'

//使用路由懒加载，实现动态导入
const Home = () => import('../views/Home.vue')

import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import News from '../views/News.vue'

// 配置嵌套路由
import Parent from '../views/Parent.vue'
import One from '../views/One.vue'
import Two from '../views/Two.vue'

// 编程式路由
import Page from '../views/Page.vue'


// 路由视图
import Header from '../views/Header.vue'
import Body from '../views/Body.vue'
import Footer from '../views/Footer.vue'


const routes = [

    {
        // 重定向
        path: "/",
        // url
        redirect: "/home"
        // 对象
        // redirect: {name: "Home"}
        //方法
        // redirect: to=>{
        //     //里面可以写逻辑判断或者参数
        //     return {
        //         path: "/home",
        //         query: {id: 3}
        //     }
        // }
    },
    {
        name: "Home",
        path: "/home",
        // 别名
        // alias: "/homePage",
        component: Home
    },
    {
        // 加上name.可以通过name匹配，用于编程式导航
        // 命名路由
        name: "about",
        path: "/about",
        // alias: "/guanyu",
        component: About,
        // 独享路由守卫
        // 只会在进入路由时触发
        beforeEnter: (to,from,next) =>{
            console.log(to);
            // 写逻辑判断，通过才放行
            next()
        }
    },
    // 动态参数路由
    {
        name: "user",
        path: "/user/:id",
        component: User,
        //路由组件传参
        props: true
    },
    // 对动态参数进行一些匹配
    {
        // 参数只能是数子，否则跳转到404
        // path: "/news/:id(\\d+)",
        // 匹配多个参数。即a/b/c形式
        // path: "/news/:id+",
        name: "news",
        // 参数可选 * 号或者? 号都可以，？号只能匹配单个参数，不支持a/b/c
        path: "/news/:id*",
        component: News,
        


    },
    // 嵌套路由
    {
        path: "/parent/:id*",
        // 别名的访问方式，需要在#号后面
        // http://localhost:5173/#/father
        alias: "/father",
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

    //编程式路由
    {
        path: "/page",
        component: Page
    },

    // 命名视图
    {
        // path: "/view",
        path: "/view/:id",
        // 使用components 里面是对象
        components: {
            // 设置默认视图
            default: Body,
            //es6简写
            Header,
            Footer

        },
        // 在命名视图里面传参
        props:{
            default: true, // 默认视图传参，另外视图根据需求来设置是否传参
            Header:false,
            Footer:false
        }
    },
    // 捕获所有路由或者404
    {
        // 正则表达式，官方写法，pathMatch可以是任意字符，最后一个*也可以省略
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

const router = createRouter({
    // 使用hash模式，url中有#号
    // history: createWebHashHistory(),
    // 使用html5模式，url没有#号，但是访问不存在的资源会会出现404错误
    // 没有与后端接通，暂时未出现404，官方推荐使用回退路由到首页
    history: createWebHistory(),
    routes, //简写

    
    
})

// 路由守卫，全局
// router.beforeEach((to,from,next) =>{
//     console.log(to);
//     console.log(from);
//     // next放行
//     next()
// })

// 暴露路由
export default router