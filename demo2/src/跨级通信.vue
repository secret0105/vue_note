<script>
  //学习组件跨级通信
  import Son from './components/Son.vue'
  export default{
    data(){
      return {
        msg:"hello vue",
        obj:{
          message: "hello vue"
        }
      }
    },
    components:{
      Son
    },
     //传递数据
    //  provide:{
      //provide inject 是非响应式，不会影响子组件
      provide(){
            //不能直接通过this.message传递
            //会提示找不到
            //Uncaught TypeError: Cannot read properties of undefined (reading 'message')
            // message: "hello vue"
            // message: this.message

            //使用this需要返回对象
            return {
              //使用响应式，方式一：使用对象来传递数据
              // message:this.message
              // obj:this.obj

              // 方式二：函数返回响应式数据
              // 箭头函数没懂
              msg:()=>this.msg


            }

            
        }
  }

</script>

<template>

  <!-- 事件处理 -->
  <!-- <h2>我是祖先组件---{{ obj.message }}</h2> -->
  <!-- <button @click="obj.message='nihao'">改变祖先组件的属性</button> -->

  <!-- 使用方法响应 -->
  <h2>我是祖先组件---{{ msg }}</h2>
  <button @click="msg='nihao'">改变祖先组件的属性</button>
  <Son></Son>

</template>

<style scoped></style>
