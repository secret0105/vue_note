<script>
    //引用孙子组件
    import GrandSon from './GrandSon.vue'
    export default {
        data(){
            return {
                message: "hello son"
            }
        },
        components:{
            GrandSon
        },
       
    }

</script>

<template>
    <GrandSon></GrandSon>
</template>