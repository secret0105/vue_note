<template>
    <!-- 学习编程式路由 -->
    <h2>Page</h2>
    <button @click="goOther">跳转页面</button>
</template>

<script>
    export default {
        methods:{
            goOther(){
                // 跳转到首页
                // this.$router.push("/")
                // 支持参数 对象
                // this.$router.push({path: "/user/1234"})
                // 传参 与index.js中的路由规则匹配，不支持多个参数
                // this.$router.push({name: "user",params: { id: "zhangsan"}})
                // 传参 ?param=xx&param2=xx 形式 使用query,并且跳转的目标组件也需要用query接收参数
                // this.$router.push({name: "about",query:{username: "zs", age: 12}})
                // 替换当前位置，即点击浏览器的后退按钮，不显示page页面了，直接跳转到第一个页面，正常会显示
                // this.$router.push({name: "about",query:{username: "zs", age: 12},replace: true})
                // 替换的另一种写法  不是很明白替换
                this.$router.replace({name: "about",query: {username: "zs", age: 12}})
                
            
            }
        }
    }

</script>