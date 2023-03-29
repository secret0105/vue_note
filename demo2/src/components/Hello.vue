<script>
export default {
    // 接收类型可以使用数组或者对象
    // props:['msg','datas']
    //接收对象
    props: {
        //指定类型，不会报错，但会弹出警告
        msg:
        {
            //可以省略type,可以指定多种类型，使用数组
            type:String,
            //设置默认值，父组件不用传递数据过来
            default: 'default',
            //必传值，但是也不会报错，只会警告
            required:true,
        },
        datas: "",
        //数组或者对象默认值必须用函数来接收
        persons:{
            type:Array,
            default(){
                return [4,5,6]
            }

        }
    },
    mounted(){
        //访问根组件
        console.log(this.$root.message);
    }
}
</script>

<!-- 子组件有模板就够了 -->
<template>
    <!-- 使用父组件content的数据 -->
    <h2>hello vue</h2>
    <hr>
    <!-- 渲染父组件数据 -->
    <h2>从父组件content传递过来的数据为{{ msg }}--{{ datas }}</h2>
    <h2>接收数组{{ persons }}</h2>
</template>