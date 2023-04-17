<script>
  // 学习状态管理
  import store from './store'
  import State from './views/State.vue'

  export default {
    provide:{
      store
    },
    components:{
      State
    }
  }
</script>

<template>  
  <State />

</template>

<style scoped></style>
