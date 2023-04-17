<template>
    <!-- 学习状态管理 -->
    {{ store.state.message }}

    <!-- 由于自己实验时返回的不是列表，不能用v-for -->
    <!-- <ul>
        <li v-for="data in datas" :key="message">{{ data.message }} -- {{ data.name }}</li>
    </ul> -->
    <p>{{ store.state.datas.message }} -- {{ store.state.datas.name }}</p>

    <!-- 与教程的差异，可以直接使用store，不用在script中重新定义方法来使用 -->
    <button @click="store.updateMsg">改变属性</button>
</template>


<script>
    const url = "http://127.0.0.1:9099/hello"
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
            fetch(url).then((res) =>{
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
                this.store.updateDatas(res.data)
            })
        },
        // updated(){
        //     console.log(":",this.datas);
        // }

    }
    

</script>