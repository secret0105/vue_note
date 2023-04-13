<template>
    <!-- 命名路由 -->
    <h2>视图路由主体</h2>
</template>

<script>
    export default{
        // 命名视图接收参数
        props:['id'],
        mounted(){
            console.log(this.id);
        }
    }
</script>