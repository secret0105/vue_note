<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      num: 0,
      message: 'hello vue123',
      user:{
        name:'zhangsan',
        age:12
      }

    }
  },
  computed: {
    reverseMsg: {
      set: function (newValue) {
        //一般不用Set方法，当被设置或者依赖属性变化时，会调用
        console.log(newValue);
        this.message=newValue
      },
      get: function () {
        return this.message.split("").reverse().join("")
      }
    }
  },
  //监听器
  watch:{
    //监听的属性
    //当属性发生变化时，就会触发下面的方法
    // message:function(newValue,oldValue){
    //   console.log(newValue);
    //   console.log(oldValue);

    //   //可以写异步操作,ajax等
    //   //对监听的数据进行判断
    //   //但是这种写法不会在最开始的时候就判断，如果是从后端传数据，不会立即渲染
    //   if(newValue.length<5 || newValue.length>10){
    //     console.log('长度不能小于5或者大于10');
    //   }
    // }

    
    message:{
      immediate:true,
      handler:function(newValue){
        if(newValue.length<5 || newValue.length>10){}
          console.log('长度不能小于5或者大于10');
      }
    },
    //深度监听
    //普通监听无法监听对象的属性
    // user:function(newValue){
    //   //当name属性变化时，不会输出任何结果
    //   console.log(newValue);
    // }

    //深度监听会监听所有属性，开销大，使用字符串的方式
    "user.name":{
      handler:function(newValue){
        console.log(newValue);
      },
      deep: true
    }
  }
}

</script>

<template>
  <div>
    <p>{{ message }}</p>

    <button @click="message='nihao'">改变message</button>
    
    <!-- v-model双向绑定 -->
    <input type="text" v-model="message">
    <br>
    {{ user.name }}
    <button @click="user.name='lisi'">更改对象属性</button>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#d1 {
  color: red;
}

#d2 {
  color: blue;
}

.d1 {
  font-size: 30px;
}</style>
