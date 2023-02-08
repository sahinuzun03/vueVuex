<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="todo" placeholder="Todo Ekle">
    <button>Ekle</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        const store = useStore();
        const todo = ref('');
        const addTodo = () => {
            const objectTodo = {
                newTodo:todo.value,
                done:true,
            };
            
            //store.dispathc ile action'i tetikleyeceğim oda gidip addTodo mutation ' tetikleyecektir.
            store.dispatch("addTodoAction",objectTodo);

        }

        return {todo,addTodo}

    }
}
</script>

<style>

</style>