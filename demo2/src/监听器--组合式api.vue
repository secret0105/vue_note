<script>

//学习组合式api

//学习 监听器
import {ref,reactive,toRefs, watch, watchEffect} from 'vue'

export default {
  //setup作为api入口，是一个函数，没有this
  //将同一套逻辑代码收集到一起
  //注意与选项式api的对比

  setup(){
   const counter = ref(0)
   function changeCount(){
    counter.value++
   }

   const message = ref('hello')
   function changeMsg(){
    message.value = 'hello vue'
   }

   const obj = reactive({
    name: "zhangsan",
    age: 12
   })
   function changeObj(){
    obj.name = "lisi"
   }

   //监听器 watch
  //  watch:{
  //   //不能使用选项式的写法
  //   // count:function(newVal,oldVal){
  //   //   console.log(newVal);
  //   // }
  //   //使用箭头函数
    
  //  };

  watch(counter,(newVal,oldVal) => {
    console.log(newVal,oldVal);
  })
   //监听对象
   watch(obj,(newVal,oldVal) => {
    //输出的两次都是改变后的数据
    console.log(newVal,oldVal);
   })

   //使用watchEffect，回调函数无法获取oldValue
   watchEffect( ()=>{
    //不需要指定监听的属性，组件初始化时自动收集依赖
    // 初始化时就会获取监听的原始数据 进行打印
    console.log("watchEffect----",obj.name);
   })


   return {message,counter,obj,changeCount,changeMsg,changeObj}

  }

}

</script>

<template>

  <h2>{{ counter }}</h2>
  <button @click="changeCount">计数</button>
  <hr>
  <h2>{{ message }}</h2>
  <button @click="changeMsg">改变字符串</button>
  <hr>
  <h2>{{ obj.name }}</h2>
  <button @click="changeObj">改变名字</button>
</template>

<style scoped></style>
