<template>
    <ul>
        <li v-for="(note,index) in notes" :key="index">{{note}}</li>
    </ul>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const notes = ref([]);
    }
}
</script>

<style>

</style>