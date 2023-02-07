<template>
  <div class="home">
    <!-- List içerisinde bulunan :todos props'a veri gönderiyorum burada ulunan todoList'i -->
    <List></List>
    <AddTodo/>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref,onUpdated} from 'vue'
import List from '../components/List.vue'
import AddTodo from '../components/AddTodo.vue'
import {useRoute} from 'vue-router'
export default {
  name: 'Home',
  components: {List,AddTodo},
  setup(){
  }
}
</script>







<style>
/* Vuex bize bir bilgiyi alt componentlere iletmek için bize bir alan tanımlar ve ihtiyacı olan komponentler buradan bu bilgiye ulaşıp değiştirmek isterlerse değiştirirler. */


</style>
