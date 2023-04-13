<template>
    <h2>I am User {{ id }}</h2>
</template>

<!-- 选项式api写法 -->
<!--<script>
    export default {
        // data(){
        //     return {
        //         id: null
        //     }
        // },
        props: ['id'],

        mounted(){
            // 获取路由参数的第一种方式
            // $route 代表当前活跃的路由,注意使用的是params
            // this.id = this.$route.params.id
            // 获取路由参数的第二种方式
            // 直接通过props来获取
            
        }
    }
</script> 
-->



<!-- 组合式api写法 -->
<script setup>
// 组合式api中没有this,需要搭配useRoute 使用

// 获取路由参数的第一种方式
// import { onMounted, ref } from 'vue';
// import { useRoute } from 'vue-router';

// // 注意调用的是useRoute方法
// // const id = ref(useRoute().params.id)
// const id = ref()

// onMounted(() => {
//     console.log(useRoute().params.id)
//     // 需要用value
//     id.value = useRoute().params.id
// })
// 获取路由参数的第二种方式

const props = defineProps({
    id: String  // 参数默认都是String类型
})



</script>

