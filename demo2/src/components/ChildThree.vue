<template>
    <h2>{{ message }}</h2>

    <!-- 通过点击事件发送数据给父组件 -->
    <button @click="sendParent">发送数据</button>

</template>


<script>
// 学习props中的context

import { onUpdated, toRefs, ref, h } from 'vue';

export default {
    props: {
        message: {
            type: String
        }
    },
    setup(props,context) {
        // props 
        // console.log(props.message);
        // // 注意这里是props 不是props.message
        // // const { message } = props 非响应式
        // // 响应式
        // // 注意：props必须传值过来，如果没有传值，可以使用toRef
        // const { message } = toRefs(props)
        // // console.log(message);
        // onUpdated(() =>{
        //     // 此时还是非响应式
        //     // console.log(message);
        //     // 响应式需要获取value值
        //     console.log(message.value);
        // })

        // context的用法
        // 新版官方文档中已经不是使用context ，而是直接使用attr.emit slot
        // attr 获取属性
        console.log(context.attrs);
        
        // emit 绑定事件
        // 
        // 向父组件传递数据
        const counter = ref(20)
        function sendParent() {
            context.emit('injectCounter',counter.value)
        }

        // setup 返回渲染函数

        // expose 暴露渲染函数 暴露的是对象
        // 父组件通过ref来接收
        context.expose({
            sendParent,counter
        })

        // 加上这句后，父组件中该子组件只会显示20了，替换本组件中的template内容
        return () => h('div',counter.value)



        // return { sendParent }


    },
    
}

</script>