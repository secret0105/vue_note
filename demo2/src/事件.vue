<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      count:0,
      age:12
    }

  },
  methods:{
    addCount(){
      this.count ++ 
    },
    // 带参数
    addCountTwo(number){
      this.count += number
    },
    //点击事件
    // addCountThree(e){
    //   this.count ++
    //   console.log(e)
    // },
    //绑定元素加事件
    add2(number,event){
      this.count += number
      console.log(event)  //PointerEvent
    },
    add3(){
      this.age ++
    }

  }
}

</script>

<template>
  <p @click="count++">{{ count }}</p>
  <!-- 使用方法 -->
  <p @click="addCount">{{ count }}</p>
  <!-- 传递参数 -->
  <p @click="addCountTwo(5)">{{ count }}</p>

  <!-- 点击事件，调用时不能传参 -->
  <!-- <p @click="addCountThree">{{ count }}</p> -->

  <!-- 绑定事件和参数 -->
  <p @click="add2(3,$event)">{{ count }}</p>

  <!-- 绑定多个事件 调用需要使用括号-->
  <p @click="add2(3,$event),add3()">{{ count }}--{{ age }}</p>

</template>

<style scoped>

</style>
