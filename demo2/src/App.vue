<script setup>
  // import Page from './views/Page.vue'


</script>

<template>  

  <!-- 命名视图 -->
  <RouterView name="Header"></RouterView>

  <!-- 默认视图可以不写name -->
  <RouterView></RouterView>
  <RouterLink to="/">Home</RouterLink> | 
  <RouterLink to="/page">Page</RouterLink> | 
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/news/123">News</RouterLink> | 
  <!-- 命名路由 -->
  <RouterLink :to="{name:'user',params:{id: 'zhangsan'}}">User</RouterLink>


  
  
  <RouterView name="Footer"></RouterView>
</template>

<style scoped></style>
