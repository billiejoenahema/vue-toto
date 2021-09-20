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
  newTodo : (state) => state.newTodo,

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
  }
}

export default {
  namespaced : true,
  state,
  getters,
  mutations,
}
