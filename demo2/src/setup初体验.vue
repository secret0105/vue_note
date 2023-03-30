<script>

//学习组合式api

//使用ref函数实现响应式
// ref 绑定普通数据
// reactive 绑定对象
// toRefs函数来实现响应式 注意是s
import {ref,reactive,toRefs} from 'vue'

export default {
  //setup作为api入口，是一个函数，没有this

  //将同一套逻辑代码收集到一起
  setup(){
    let message = "hello vue"
    //不需要使用this来调用
    console.log(message);
    function changeMsg(){
      message = "nihao"
      console.log(message);
    }

    const counter = ref(0);

    function changeCounter(){
      //setup中需要使用value获取值
      //模板中不需要
      return counter.value ++
    };

    const obj = reactive({
      name: "zhangsan",
      age:32,
      children:{
        name:"lisi",
        age:11
      }
    });


    //普通的暴露没有响应式，toRef可以省略对象名

    //需要暴露属性和方法，但是暴露后仍然是非响应式，不能改变模板显示
    //使用扩展运算符解构对象，并且具有响应式
    return { message,changeMsg,counter,changeCounter,obj,...toRefs(obj) }
  }

}

</script>

<template>
  {{ message }}
  <button @click="changeMsg">点击</button>

  <!-- 模板自动解析value值 -->
  {{ counter }}
  <button @click="changeCounter">增加</button>

  <!-- 解析对象 -->
  <!-- 不用obj.name -->
  {{ name }}
  {{ children.name }}

  <button @click="children.name='wangwu'">改变children名字</button>
</template>

<style scoped></style>
