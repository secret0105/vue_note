<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      count:0,
      age:12,
      message:"",
      checked:"",
      persons:[],
      sex:"",
      fruit:"",
      fruits:[],
      msg:null,
      text:""
    }

  },
  methods:{
    divC:function(){
      console.log('i am div');
    },
    divb(){
      console.log('i am button');
    },
    mySubmit(){
      console.log('提交成功');
    },
    ppp(){
      console.log('我被触发了');
    },
    keyup(){
      console.log('键盘被按下了')
    },
    //v-model底层
    changeValue(e){
      this.message = e.target.value
    },
    showValue(){
      console.log(this.text)
    }

  }
}

</script>

<template>
  <!-- 事件修饰符 -->
  <!-- .stop 组织冒泡事件 默认情况下，子事件会触发父事件-->
  <div @click="divC">
    <!-- <button @click="divb.stop">按钮</button> -->
    <!-- 两种写法都能执行成功 -->
    <button @click.stop="divb">按钮</button>
  </div>

  <!-- prevent 阻止默认事件 -->
  <form action="">
    <!-- prevent只能写在click处，不然不生效 -->
    <input type="submit" @click.prevent="mySubmit" value="提交">
  </form>

  <!-- .once只触发一次  本例中只会打印一次-->
  <button @click.once="ppp">按钮2</button>

  <!-- 键盘事件 略 -->
  <input type="text" @keyup="keyup">
  <hr>
  <!-- v-model 双向绑定 -->
  <p>{{ message }}</p>
  <input type="text" v-model="message"><br>

  <!-- v-model原理 -->
  <!--  -->
  <input type="text" :value="message" @input="changeValue">

  <!-- v-model 一些特殊元素的绑定 -->
  <!-- 复选框 单选为布尔值-->
  <br>
  <input type="checkbox"  v-model="checked">
  <h2>{{ checked }}</h2>
  <br>
  <!-- 多选 -->
  <input type="checkbox" v-model="persons" value="张三">张三
  <input type="checkbox" v-model="persons" value="李四">李四
  <input type="checkbox" v-model="persons" value="王五">王五
  <h2>{{ persons }}</h2>
  <br>

  <!-- 单选框 -->
  <!-- 需要设置value ，不然可以多选 -->
  <input type="radio" v-model="sex" value="男">男
  <input type="radio" v-model="sex" value="女">女
  <h2>{{ sex }}</h2>
  <br>

  <!-- 下拉框 -->
  <!-- 单选 -->
  <select name="" id="" v-model="fruit">
    <option value="西瓜">西瓜</option>
    <option value="橘子">橘子</option>
    <option value="橙子">橙子</option>
  </select>
  <h2>{{ fruit }}</h2>
  <br>

  <!-- 多选 -->
  <!-- 多选需要使用ctrl 按键来多选-->
  <select name="" id="" v-model="fruits" multiple>
    <option value="草莓">草莓</option>
    <option value="菠萝">菠萝</option>
    <option value="苹果">苹果</option>
  </select>
  {{ fruits }}
  <br>
  <br>
  <!-- model修饰符 -->
  <!--  lazy 修改完成后才会同步数据-->
  {{ message }}
  <br>
  <input type="text" v-model.lazy="message">
  <br>
  <!-- number 将输入框字符自动转为数字类型 -->
  <!-- 输入框中此时输入英文也不会报错 -->
  <input type="text" v-model.number="msg">
  <br>
  {{ typeof msg }}
  <br>
  <!-- trim 过滤首尾空白 -->
  <input type="text" v-model.trim="text">
  <br>
  {{ text }}
  <br>
  <button @click="showValue">按钮</button>

</template>

<style scoped>

</style>
