<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup
//引入子组件
import Content from './components/Content.vue'
import axios from 'axios'
export default {
  data() {
    return {
      message: "i am app.vue"
    }
  },
  //注册组件
  components: {
    Content
  },
  methods: {
    //定义方法接收子组件数据
    //会有个默认值，从子组件处接收
    getMsg(value) {
      console.log(value);
      this.message = value
    },
    triggerJenins(){
      const path = "http://192.168.0.103:8088/view/remote_test/job/test_01/buildWithParameters?token=123456&name=zhangsan"
      axios.get(path)
      
    }

  },
  //在生命周期函数中获取refs
  mounted() {
    //refs接收子组件和标签的ref属性
    // console.log(this.$refs)
    //直接访问子组件数据
    // console.log(this.$refs.hello.a);
  }

}

</script>

<template>
    <!-- 使用子组件 -->
    <div>
      <h2>我是父组件APP中的message{{ message }}</h2>
      <!-- 绑定事件，关联子组件事件，注意名字,不要弄混-->
      <!-- ref 定义在子组件上 -->
      <!-- <Content @changeMsg="getMsg" ref="hello"></Content> -->
      <p ref="p"></p>
      <!-- 每次调用都是新的对象，不会受到其他调用的同名组件的影响 -->
      <!-- <Content></Content> -->
      <!-- <Content></Content> -->

      <!-- 插槽的用法 -->
      <!-- <Content>我是用于content组件插槽的内容</Content> -->
      <!-- 每个组件都可以使用单独的插槽内容，不会互相影响 -->
      <!-- 可以传递多个标签内容 ，可以同时放到组件里面替换-->

      <!-- 具名化插槽 内容自动替换指定名称的插槽-->
      <!-- 需要搭配template使用 -->
      <!-- template需要放在子组件里面 -->
        <Content>
          <template v-slot:header><h1>我是具名插槽h1</h1></template>
          <!-- v-slot加的是冒号-->
          <!-- 只能选到父组件的属性，注意组件的作用域 -->
          <template v-slot:button><button>我是具名插槽button + {{ message }}</button></template>
      </Content>

      <Content>
        <template v-slot="ddd"></template>
      </Content>
      <hr>
      <!-- 作用域插槽，从子组件获取数据 -->
      <Content>
        <!-- 默认数据都会存储到slotProps中 -->
        <template v-slot:default="slotProps">
          <!-- {{ names }} -->
          <ul>
            <li v-for="item in slotProps.names" key="item">{{ item }}</li>
          </ul>
        </template>
      </Content>

      <hr>
      <button @click="triggerJenins">触发jenkins构建</button>
    </div>

</template>

<style scoped></style>
