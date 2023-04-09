<script>
    export default {
        // 这里仍然需要使用prop来接收
        props:{
            message:{
                type: String
            }
        },

        setup(props){
            console.log(props.message);
        }
    }


</script>


<template>

</template>