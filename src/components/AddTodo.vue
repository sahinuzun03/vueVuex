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
            //store.commit ile mutation içindeki metotlara ulaşırım. 1 metot adı 2 veri ile ilem gerçekleştirilir.Yeni todo eklemiş oldu
            store.commit('addTodo',objectTodo);

        }

        return {todo,addTodo}

    }
}
</script>

<style>

</style>