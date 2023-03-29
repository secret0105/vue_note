<script>
    //子模块引入子模块
    import Hello from "./Hello.vue"

    //用下面这种方法的话，所有组件都是一个对象
    // 所有子组件会同时改变
    // const obj = {message: "haha"}
    export default{
        //data 必须是函数，每次返回新的对象
        data(){
            return {
                //只有子组件单独点击时，才会改变，不会影响其他子组件的调用
                message: 'hello',
                msgc:"i am content param msgc",
                persons:['zs','ls','ww'],
                a: 10,
                names:[1,2,3,4,5]
            }
        },
        components:{
            Hello
        },
        methods:{
            sendMsGToParent(){
                //第一个参数为自定义方法名，用于父组件绑定
                // 第二个为需要传递的参数
                //$emit来触发事件
                this.$emit('changeMsg',this.msgc)
            }
        },
        mounted(){
            //访问父组件 不推荐，因为一个子组件可能同时被多个父组件引用
            // console.log(this.$parent.message);
        }
    }
</script>

<template>
    <!-- <Hello></Hello> -->
    <h2>我是content模块</h2>
    <!-- {{ message }} -->
    
    <!-- <button @click="message='nihao'">按钮</button> -->

    <!-- 向子组件传递数据，包括动态和静态 -->
    <!-- 动态需要绑定属性 -->
    <!-- <Hello :msg="message" datas="123" :persons="persons"></Hello> -->
    <Hello :msg="message" datas="123"></Hello>

    <!-- 向父组件传递数据或者更改数据 -->
    <button @click="sendMsGToParent">改变父组件属性</button>

    <div>

        <!-- 定义插槽 -->
        <slot></slot>

        <!-- 具名式插槽 -->
        <slot name="header"></slot>
        <slot name="button"></slot>

        <!-- 指定插槽默认内容 -->
        <slot name="ddd"><span>我是默认内容</span></slot>

        <!-- 作用域插槽，向父组件传递数据 -->
        <!-- 向父组件传递一个数组，然后在父组件中渲染出来 -->
        <!-- 可以同时传递多个数据过去 -->
        <slot :names="names"></slot>
    </div>
</template>