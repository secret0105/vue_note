<script>
import { onMounted } from 'vue';
import ChildThree  from './components/ChildThree.vue'
// 学习setup中的context
export default {
  data(){
    return {
      message:"hello vue"
    }
  },
  components:{
    ChildThree
  },
  //接收子组件的属性
  methods:{
    injectCounter(value){
        console.log(value);
      
    }
  },
  //钩子函数接收子组件refs
  mounted(){
    console.log(this.$refs.childthree);
    // 这里会接收到子组件传过来的sendParent和counter对象
    this.$refs.childthree.sendParent()
  }
}

</script>

<template>  
  <!-- 注意写法，用的是v-bind形式 -->
  <!-- 传递属性 -->
  <!-- <ChildThree :message="message" class="com" @injectCounter="injectCounter"></ChildThree> -->
  <ChildThree :message="message" class="com" @injectCounter="injectCounter" ref="childthree"></ChildThree>
  <hr>
  <button @click="message='nihao'">改变父组件message</button>
</template>

<style scoped></style>
