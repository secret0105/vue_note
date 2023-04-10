<script setup>



</script>

<template>  
  <!-- router-link 本质是一个a标签 -->
  <RouterLink to="/">Home</RouterLink> | 
  <RouterLink to="/about">About</RouterLink> | 

  <!-- 使用动态参数路由 -->
  <RouterLink to="/user/123">User</RouterLink> | 

  <!-- 捕获404 -->
  <RouterLink to="/other">Other</RouterLink>

  <!-- 占位符，用来展示组件内容，如果写在上方，则组件内容会显示到上方 -->
  <RouterView></RouterView>
</template>

<style scoped></style>
