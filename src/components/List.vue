<template>
    <ul>
        <li v-for="todo in todoList" :key="todo.id">{{ todo.todo }}</li>
    </ul>
</template>

<script>
import { useStore } from 'vuex'; //Store içerisine ulaşamak için kullanıyorum
import { computed } from 'vue';

export default {
    setup(){
        const store = useStore();

        const todoList = computed(() => {
            return store.state.todoList; //store içerisine bulunan state'te bulunan verilere ulaştım.
        });

        return {todoList}
    }
};
</script>

<style>

</style>