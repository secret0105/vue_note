<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      persons:['zhangsan','lisi','wangwu'],
      arrs:[1,2,3,4,5]
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
      // this.persons.shift()
      //unshift 也支持插入多个
      //splice  可以插入，删除 替换 功能多
      //删除 第一个参数代表小标，第二个参数代表要删除的元素个数，不指定则删除下标后面的全部元素
      // this.arrs.splice(1,2)
      // 插入 第二个参数要设置为0 可以插入多个  下标都是从0开始计算
      // this.arrs.splice(2,0,33,44,55)
      //替换 第二个参数代表替换的元素个数
      // this.arrs.splice(1,3,7,8,9)
      //reverse 和 sort 会改变原有的数组
      this.arrs.reverse()
      console.log(this.arrs) //[5,4,3,2,1]

    
      

    }
  }
}

</script>

<template>
  <div>
   <ul>
    <li v-for="person in persons" :key="person">{{ person }}</li>
   </ul>

   <ul>
    <li v-for="arr in arrs" :key="arr">{{ arr }}</li>
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
