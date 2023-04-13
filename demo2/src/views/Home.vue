<template>

    <!-- 路由视图 -->
    <h2>Home</h2>
</template>
<script>
    export default {
        mounted(){
            console.log(this.$route.query.id);
        }
    }

</script>