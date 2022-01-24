const priorityTypes = [
  { type: 3, value: '高' },
  { type: 2, value: '中' },
  { type: 1, value: '低' },
];

const initialNewTodoState = {
  newTodo: {
    title: '',
    processType: 1,
    priority: 1,
  },
};

const state = {
  newTodo: {
    title: '',
    processType: 1,
    priority: 1,
  },
  todoList: [],
  showAddNewModal: false,
  editTargetIndex: 0,
  isShowModal: false,
};

const getters = {
  newTodo: (state) => state.newTodo,
  todoList: (state) => state.todoList,
  showAddNewModal: (state) => state.showAddNewModal,
  isShowModal: (state) => state.isShowModal,
  priorityValue: () => (t) => {
    return priorityTypes.find((o) => o.type === t).value;
  },
};

const actions = {};

const mutations = {
  initNewTodo(state) {
    state.newTodo = JSON.parse(JSON.stringify(initialNewTodoState.newTodo));
  },
  toggleShowModal(state, isShow) {
    state.showAddNewModal = isShow;
  },
  setNewTodoTitle(state, title) {
    state.newTodo.title = title;
  },
  setNewTodoPriority(state, priority) {
    state.newTodo.priority = priority;
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
  editTodo(state, index) {
    const editTarget = state.todoList[index];
    state.newTodo = { ...editTarget };
    state.showAddNewModal = true;
    state.editTargetIndex = index;
  },
  postTodo(state, data) {
    state.todoList.push(data);
    // localStorage に保存する
    localStorage.setItem(
      'todoList',
      JSON.stringify(state.todoList, undefined, 1)
    );
  },
  updateTodo(state) {
    state.todoList.splice(state.editTargetIndex, 1, state.newTodo);
  },
  deleteTodo(state, index) {
    state.todoList = state.todoList.filter((todo, idx) => index !== idx);
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
