<template>
    <h2>I am User {{ id }}</h2>
</template>

<!-- 选项式api写法 -->
<!-- <script>
    export default {
        data(){
            return {
                id: null
            }
        },
        mounted(){
            // $route 代表当前活跃的路由,注意使用的是params
            this.id = this.$route.params.id
        }
    }
</script> -->

<!-- 组合式api写法 -->
<script setup>
// 组合式api中没有this,需要搭配useRoute 使用

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// 注意调用的是useRoute方法
// const id = ref(useRoute().params.id)
const id = ref()

onMounted(() => {
    console.log(useRoute().params.id)
    // 需要用value
    id.value = useRoute().params.id
})


</script>