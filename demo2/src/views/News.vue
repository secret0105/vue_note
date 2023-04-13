<template>

    <h2>News</h2>
</template>

<script>
// 组件路由守卫
    export default {
        data(){
            return {
                message: 'hello news'
            }
        },
        beforeRouteEnter(to,from,next){
            // 进入路由才会触发，不能使用this
            console.log('进入news');
            // 获取data的方法
            next(vm => {
                console.log(vm.message);
            }
        )},
        beforeRouteUpdate(){
            console.log('更新news');
        },
        beforeRouteLeave(){
            console.log('离开news');
        }
    }
</script>