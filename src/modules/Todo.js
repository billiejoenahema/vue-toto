const priorityTypes = [
  { type: 3, value: '高' },
  { type: 2, value: '中' },
  { type: 1, value: '低' },
];

const state = {
  newTodo: {
    title: '',
    processType: 1,
    priority: 1,
  },
  todoList: [],
  isShowModal: false,
};

const getters = {
  newTodo: (state) => state.newTodo,
  todoList: (state) => state.todoList,
  isShowModal: (state) => state.isShowModal,
  priorityValue: () => (type) => {
    return priorityTypes.find((o) => o.type === type).value;
  },
};

const actions = {
  get({ commit }) {
    const response = JSON.parse(localStorage.getItem('todoList'));
    commit('setTodoList', response);
  },
};

const mutations = {
  setTodoList(state, res) {
    state.todoList = [];
    state.todoList = res ?? [];
  },
  updateProcessTypeStatus(state, { status, index }) {
    const target = state.todoList[index];
    target.processType = status;
  },
  todoSort(state, sortKey) {
    state.todoList.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
    });
  },
  postTodo(state, newTodo) {
    state.todoList.push(newTodo);
    // localStorage の Todo リストを更新する
    localStorage.setItem(
      'todoList',
      JSON.stringify(state.todoList, undefined, 1)
    );
  },
  updateTodo(state, todo, index) {
    console.log(todo);
    console.log(index);
    state.todoList.splice(index, 1, todo);
    // localStorage の Todo リストを更新する
    localStorage.setItem(
      'todoList',
      JSON.stringify(state.todoList, undefined, 1)
    );
  },
  deleteTodo(state, index) {
    // 指定した Todo をリストから取り除く
    state.todoList = state.todoList.filter((todo, idx) => index !== idx);
    // localStorage の Todo リストを更新する
    localStorage.setItem(
      'todoList',
      JSON.stringify(state.todoList, undefined, 1)
    );
  },
  showModal(state) {
    state.isShowModal = true;
  },
  closeModal(state) {
    state.isShowModal = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
