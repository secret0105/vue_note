<script>

//学习组合式api

//学习 计算属性
import { ref, reactive, toRefs, watch, watchEffect, computed, onMounted } from 'vue'

import ChildTwo from './components/ChildTwo.vue'

export default {
  //setup作为api入口，是一个函数，没有this
  //将同一套逻辑代码收集到一起
  //注意与选项式api的对比
  setup() {

    const msg = ref("hello world")
    //利用计算属性实现翻转
    // 这里返回的也是一个对象，需要用.value获取值
    // revertMsg 也可以用同样的写法定义在对象中
    const revertMsg = computed(() => {
      return msg.value.split("").reverse().join("")
    })
    console.log(revertMsg.value);
    // 与选项式API对比，组合式API生命周期钩子函数多了on
    onMounted(() => {
      console.log('mounted');
    })

    // setup中的prop传递
    return { msg, revertMsg }
  },
  components: {
    ChildTwo
  }

}

</script>

<template>  

  <ChildTwo :message="msg">子组件</ChildTwo>
</template>

<style scoped></style>
