<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default{
  data(){
    return {
      num:0,
      name:"lisi",
      msg:"<h2>标题</h2>",
      id: "d1",
      attrname: 'id',
      mouseEvent:  "click"
    }
  },
  methods: {
    changeName:function(){
      this.name = "zhangsan"
    },
    changeColor:function(){
      this.id = "d2"
    }
  }
}

</script>

<template>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <p>{{ num }}</p>
    <p>{{ name }}</p>
    <p v-once>{{ name }}</p>
    <p>{{ msg }}</p>
    <p v-html="msg"></p>
    <!-- 这里使用了v-on的语法糖-->
    <button @click="changeName">改变名字</button>

    <!-- v-bind 绑定属性 可以对属性进行运算操作-->
    <p v-bind:id="id">hello vue</p>
    <p :id="id">hello vue</p>
    <!-- 简单的方法可以不使用函数 -->
    <button v-on:click="changeColor">改变颜色</button>
    <!-- <button v-on:click="id='d2'">改变颜色</button> -->

    <!-- 使用js -->
    <p>{{ name.split('').reverse().join('') }}</p>

    <!-- 动态属性 较少使用  注意id也是上面定义的属性，而不是html属性-->
    <p :[attrname]="id">测试动态属性</p>
    <button @click="attrname='class'">改变属性</button>

    <!-- 动态事件 -->
    <!-- "volar.inlayHints.eventArgumentInInlineHandlers": false, 在settings.json 关闭@click event提示-->
    <button @[mouseEvent]="attrname='class'">改变属性</button>
    <button @click="mouseEvent='mouseover'">改变事件</button>

    
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
}
</style>
