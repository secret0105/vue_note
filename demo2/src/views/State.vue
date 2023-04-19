<template>
    <!-- 学习状态管理 -->
    {{ store.state.message }}

    <!-- 由于自己实验时返回的不是列表，不能用v-for -->
    <!-- <ul>
        <li v-for="data in datas" :key="message">{{ data.message }} -- {{ data.name }}</li>
    </ul> -->
    <p>{{ store.state.datas.message }} -- {{ store.state.datas.name }}</p>
    <button @click="getData">axios获取后端数据</button>

    <!-- 与教程的差异，可以直接使用store，不用在script中重新定义方法来使用 -->
    <button @click="store.updateMsg">改变属性</button>
</template>


<script>
    const url = "http://127.0.0.1:9099/hello"
    
    import axios from 'axios'
    export default {
        data(){
            return {
                datas: ""
            }
        },

        inject:['store'],
        // 也可以在这里定义方法，使用store中定义的方法

        // 学习fetch的用法
        created(){
            fetch("/api/hello").then((res) =>{
                // console.log(res.json());
                // this.datas = res.data
                return res.json()
            }).then((res) =>{
                // console.log(res);

                // 与示例不太一样
                // 直接将res赋值给Datas
                // this.datas = res
                //第二种方式，通过state管理
                console.log(res);
                console.log(res.data);
                // 后端传过来的数据
                //{"data": {"message": "hello world","name": "zhangsan"}}
                this.store.updateDatas(res.data)
            })
        },
        // updated(){
        //     console.log(":",this.datas);
        // }

        // axios的用法
        // 有跨域问题，一般是后端来解决
        // 前端可以使用proxy解决
        methods:{
            getData(){
                // 模拟跨域
                // axios.get(url).then((res) =>{
                axios.get("/api/hello").then((res) =>{
                    console.log("result:",res);
                }).then(err =>{
                    console.log(err);
                })
            }
        }

    }
    

</script>