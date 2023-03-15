<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<script>
//vue 2的写法，不使用setup

export default {
  data() {
    return {
      age:11,
      isShow:true,
      persons:['张三','李四','王五'],
      people:{
        name:'zhangsan',
        age:12,
        sex:'male'
      }
    }
  },
  methods:{
    pushPerson:function(){
      //向左添加元素
      this.persons.unshift('测试')
    }
  }
}

</script>

<template>
  <div>
    <!-- 条件渲染  v-if可以使用false-->
    <p v-if="age>18">senior</p>
    <p v-else-if="age==18">18</p>
    <p v-else>children</p>

    <!-- 作用于template 可以选择显示渲染所有属性，但是template 包装器本身不会渲染出来 -->
    <template v-if="false">
      <p>hello</p>
    </template>

    <!-- v-show -->
    <!-- v-show 本质是改变display属性，会一直渲染，适合页面经常切换 -->
    <!-- v-if不会一直渲染，适合初始化 -->
    <p v-if="!isShow">v-if</p>
    <p v-show="isShow">v-show</p>
    <button @click="isShow=!isShow">改变属性</button>


    <!-- v-for的使用 支持in 和 of-->
    <!-- 支持下标 -->
    <ul>
      <!-- 不绑定key的属性值也不会报错 但是仍然推荐绑定key-->

      <!-- 取值时不支持写在同一个大括号中 -->
      <!-- <li v-for="(person,index) in persons">{{ index }}--{{ person }}</li> -->
      <!-- 注意 写法已经固定 -->
      <li v-for="(p,key,index) in people" :key="key">{{ index }}--{{ key }}--{{ p }}</li>

      <!-- Vue 默认按照“就地更新”的策略来更新通过 v-for 渲染的元素列表。
        当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，
        而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。 -->
        <!-- 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，
          你需要为每个元素对应的块提供一个唯一的 key attribute： -->

      <!-- 当不用key的时候 添加元素不会保持之前的复选框选定-->
      <!-- key相当于添加身份 可以减少渲染次数 -->
      <li v-for="person in persons"><input type="checkbox">{{ person }}</li>
      <button @click="pushPerson">增加人员</button>
    </ul>

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
