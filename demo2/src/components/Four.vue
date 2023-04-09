<script>
import { inject } from 'vue';

// 学习provide和inject
    export default{
        setup(){
            const message = inject('name')
        
            return { message }
        }
    }

</script>

<template>
    {{ message }}
</template>