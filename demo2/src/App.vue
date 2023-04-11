<script setup>



</script>

<template>  
  <!-- router-link 本质是一个a标签 -->
  <RouterLink to="/">Home</RouterLink> | 
  <RouterLink to="/about">About</RouterLink> | 

  <!-- 使用动态参数路由 -->
  <RouterLink to="/user/123">User</RouterLink> | 

  <!-- 动态参数规则匹配 -->
  <router-link to="/news/12">News</router-link> | 

  <!-- 嵌套路由 -->
  <RouterLink to="/parent">嵌套路由</RouterLink> | 
  <!-- 捕获404 -->
  <RouterLink to="/other">Other</RouterLink> | 

  <!-- 这里需要换行以下，不然parent组件里面的两个子路由会显示在Other后面 -->
  <!-- 在parent组件换行即可 -->
  <!-- <p></p> -->

  <!-- 占位符，用来展示组件内容，如果写在上方，则组件内容会显示到上方 -->
  <RouterView></RouterView>
</template>

<style scoped></style>
