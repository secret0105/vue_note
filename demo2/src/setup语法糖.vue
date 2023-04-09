<script setup>
//setup 语法糖
// 1.组件引用即可，不需要注册

import { ref } from 'vue';
import Six from './components/Six.vue'

// 2. 变量不需要手动暴露
const name = ref('zhangsan')
</script>

<template>  
  <Six></Six>
  {{ name }}
</template>

<style scoped></style>
