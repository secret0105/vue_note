<script>
import { inject } from 'vue';
export default {
    //接收祖先组件的传值
    // inject: ['message']
    //接收对象
    // inject:["obj"]
    //接收函数
    data() {
        return {
            // newmsg:""
        }
    },
    inject: ['msg'],
    computed: {
        //这里是方法
        newmsg() {
            return this.msg()
        }
    }


}

    //孙子组件 验证跨级通信

</script>

<template>
    <!-- 通过对象实现响应式 -->
    <!-- <h2>我是孙子组件---{{ obj.message }}</h2> -->

    <!-- 通过方法实现响应式，但是不推荐在模板中调用方法，使用计算属性,提升性能 -->
    <!-- <h2>{{ msg() }}</h2> -->
    <h2>我是孙子组件---{{ newmsg }}</h2>
</template>