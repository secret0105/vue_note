<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      persons:['zhangsan','lisi','wangwu']
    }

  },
  methods:{
    //数组的一些常用方法
    changeList:function(){
      //支持直接修改数组索引
      //超出原有索引最大值的话。空位自动用null代替
      // this.persons[4] = 'haha'
      //删除最后一个
      // this.persons.pop()
      //向末尾添加,可以同时增加多个
      // this.persons.push('nini',"shh")
      //删除第一个
      this.persons.shift()

    }
  }
}

</script>

<template>
  <div>
   <ul>
    <li v-for="person in persons" :key="person">{{ person }}</li>
   </ul>

   <button @click="changeList">改变数组</button>

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.active {
  color: red;
}

.hello {
  font-size: 20px;
}
</style>
