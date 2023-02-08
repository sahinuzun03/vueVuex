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
    //bir filtreleme vs işlemi yapmak istediğimiz zaman getters ile yapabiliriz.

    todoTotalCount(state){
      return state.todoList.length;
    },
    todoDoneCount(state){
      return state.todoList.filter((x) => x.done == true).length;
    },
    todoNotDoneCount(state){
      return state.todoList.filter((x) => x.done == false).length;
    }
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
    adTodoAction(context,todoObject){
      console.log(context);
      context.commit("addTodo",todoObject);
      //Mutation'da bulunan metodu çağırdıj ve todoObject'i gönderdik.
    }
  },
  modules: {
    //Birden fazla store yapısını buradan tanımlayıp kullanabiliriz. sonrasında store.state.a / store.state.b diyerek işeleme koyabilriiz.
  }
})
