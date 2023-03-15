<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      message: 'active',
      h:'hello',
      isActive:true,
      hasError:false,
      classObj:{
        active:true,
        'text-danger':false
      },
      styleObj:{
        color:'red',
        fontSize:'20px'
      },
      bgc:'yellow',
      fz:'30px'
    }
  },

  computed:{
    classObj2(){
      return{
        active:this.isActive && !this.hasError
      }
        
    }
  }
  
}

</script>

<template>
  <div>
    <!-- 绑定类属性 -->
    <p :class="{active:isActive,'text-danger':hasError}">hello vue</p>    
    <p :class="classObj">hello vue2</p>
    <button @click="isActive=!isActive">改变active</button>
    <!-- 和普通属性一起使用 可以绑定多个类名-->
    <p :class="classObj" class="hello">hello vue3</p>

    <!-- 计算属性 -->
    <p :class="classObj2">hello vue4</p>

    <!-- 使用数组 不常用 -->
    <p :class="[message,h]">hello shuzu</p>
    <!-- 组合用法 -->
    <p :class="[h,{active:isActive}]">hello combine</p>

    <!-- style 样式与class 绑定基本一致 -->
    <p :style="{backgroundColor:bgc,fontSize:fz}">hello style</p>
    <!-- 支持驼峰与- 使用-需要加上引号 -->
    <p :style="styleObj">hello style 2</p>

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.active {
  color: red;
}

.hello {
  font-size: 20px;
}

</style>
