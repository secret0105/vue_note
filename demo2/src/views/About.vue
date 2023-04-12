<template>
    <h2>About</h2>

    <!-- 这里通过按钮实现前进与后退 -->
    <button @click="backUrl">后退</button>
    <br>
    <button @click="forwardUrl">前进</button>

</template>

<script>
export default {
    mounted(){
        // 接收编程式导航传过来的参数,需要使用query接收
        console.log(this.$route.query);
        // 此时的地址栏url
        // http://localhost:5173/#/about?username=zs&age=12

    },
    methods:{
        backUrl(){
            // 正数代表前进，负数代表后退，数字可以是多步
            // this.$router.go(-1)
            // this.$router.back()
            this.$router.back()
            
        },
        forwardUrl(){
            this.$router.forward()
        }
    }
}

</script>