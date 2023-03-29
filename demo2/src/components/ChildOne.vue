<script>
export default {
    data() {
        return {
            message: "hello child"
        }
    },
    //生命周期钩子函数
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("creatd");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unMounted");
    },

}
</script>

<template>
    <p>子标签--{{ message }}</p>
    <!-- 子组件不会触发父组件的update方法 -->
    <button @click="message='nihao'">update</button>
</template>