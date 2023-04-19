<script setup lang="ts">
  
</script>

<template>
  <!-- <p>主页</p> -->



  <!-- 这里一定要配置，否则路由无法跳转 -->
  <RouterView></RouterView>
</template>

<!-- lang 依赖sass 需要用npm安装下 -->
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
</style>
