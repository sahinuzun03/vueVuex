import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList : [
      {id:1,todo:'Ders Çalış',done:false},
      {id:2,todo:'Film İzle',done:true},
      {id:3,todo:'Yemek Ye',done:false},
      {id:4,todo:'Koşu Yap',done:true},
  ],
  },
  getters: {
  },
  mutations: {
    //Bir state ' veri ekleme , güncelleme , silme işlemleri yaparken kullanırım.

    addTodo(state,{newTodo,done}){
      let todo={
        id:Math.floor(Math.random()*100000),
        todo:newTodo,
        done:state,
      };
      state.todoList.push(todo);
    }
  },
  actions: {
  },
  modules: {
  }
})
