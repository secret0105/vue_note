<script>
  //学习生命周期钩子函数
  import ChildOne from './components/ChildOne.vue';
  export default{
    data(){
      return{
        msg:"hello parent",
        isShow: true
      }
    },
    

    
    components: { ChildOne }
}

</script>

<template>
  <!-- <ChildOne></ChildOne> -->
  <p>{{ msg }}</p>

  <!-- 会触发beforeupdate 和updated方法 -->
  <!-- 这个实例应该在子组件中执行 -->
  <!-- <button @click="msg='haha'">改变父组件msg</button> -->

  <!-- 触发beforeunmout 和 unmounted -->
  <!-- 只能触发子组件的 -->
  <template v-if="isShow">
    <ChildOne></ChildOne>
  </template>
  <!-- 第一次点击触发两个方法，第二次点击触发四个方法，包括create -->
  <button @click="isShow=!isShow">触发unmount</button>

</template>

<style scoped></style>
