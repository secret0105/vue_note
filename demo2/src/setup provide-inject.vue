<script>
// 组合式api中的provide和inject
import { provide, ref } from 'vue'
import Four from './components/Four.vue';
export default {
  setup(){
    // 非响应式写法
    // provide('name','zhangsan')

    // 响应式写法
    const name = ref('zhangsan')
    // 这里不能传递value
    provide('name',name)

    function changeValue(){
      name.value = 'lisi'
    }
    return { changeValue }
  },
  components:{
    Four
  }
  
}

</script>

<template>  

  <Four></Four>
  <hr>
  <!-- 改变父组件属性 -->
  <button @click="changeValue">改变属性</button>
</template>

<style scoped></style>
