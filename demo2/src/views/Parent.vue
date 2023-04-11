<template>

    <h2>Parent组件</h2>

    <RouterLink to="/parent/one">子页面一</RouterLink> | 
    <RouterLink to="/parent/two">子页面二</RouterLink>

    <!-- 这里用来显示子路由组件的的内容 -->
    <RouterView></RouterView>

</template>