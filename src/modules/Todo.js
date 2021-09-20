const initialTodo = () => {
  return {
    newTodo: {
      title: '',
      processType: 1,
      priority: 2
    }
  }
}

const state = {
  newTodo: {
    title: '',
    process: 1,
    priority: 2,
  },
  todoList: []
}
const getters = {
  newTodo: (state) => state.newTodo,
  todoList: (state) => state.todoList,

}
const mutations = {
  initTodo(state) {
    Object.assign(state, initialTodo())
  },
  setTitle(state, title) {
    state.newTodo.title = title
  },
  setPriority(state, priority) {
    state.newTodo.priority = priority
  },
  addNewTodo(state) {
    state.todoList.push(state.newTodo)
  },
  deleteTodo(state, index) {
    const newTodo = []
    if(!confirm('削除してもよろしいですか？')) return
    state.todoList.forEach((todo, idx) => {
      if(index !== idx) {
        newTodo.push(todo)
      }
      state.todoList = newTodo
    })

  },
}

export default {
  namespaced : true,
  state,
  getters,
  mutations,
}
