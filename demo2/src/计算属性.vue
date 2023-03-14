<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      num: 0,
      message: 'hello vue'

    }
  },
  methods: {
    //这里也可以实现反转，但是与计算属性相比，没有缓存，性能差

    reverseStr: function () {
      // console.log('methods');
      return this.message.split("").reverse().join("")
    }


  },
  computed: {
    //计算属性都有一个依赖属性，依赖属性不变化，不会重新计算
    //存在缓存，可以提升性能
    //简写，相当于只有Get方法
    // reverseMsg:function(){
    //   console.log('计算属性');
    //   return this.message.split("").reverse().join("")
    // }

    //完整写法 是一个对象，并非方法
    //计算属性一般都是只读属性
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

  }
}

</script>

<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>

    <!-- 方法调用需要括号 -->
    <p>{{ reverseStr() }}</p>
    <p>{{ reverseStr() }}</p>

    <button @click="message = 'hello world'">改变属性</button>

    <!-- 注意这里改变的值，不是原生message -->
    <button @click="reverseMsg = 'hello world'">改变msg</button>

    
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
