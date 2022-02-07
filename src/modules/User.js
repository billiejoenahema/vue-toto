const state = {
  users: [],
  user: {
    name: '',
    password: '',
  },
  isLogin: false,
  canRegister: false,
};

const getters = {
  users(state) {
    return state.users;
  },
  isLogin(state) {
    return state.isLogin;
  },
  canRegister(state) {
    return state.canRegister ?? false;
  },
};

const actions = {
  users({ commit }) {
    const res = JSON.parse(localStorage.getItem('users'));
    commit('setUsers', res);
  },
  register({ commit }, newUser) {
    state.users.push(newUser);
    // localStorage の ユーザーリストにユーザーを追加する
    localStorage.setItem('users', JSON.stringify(state.users, undefined, 1));
    const res = JSON.parse(localStorage.getItem('users'));
    commit('setUsers', res);
    commit('login', newUser);
  },
};

const mutations = {
  setUsers(state, res) {
    state.users = [];
    state.users = res ?? [];
  },
  login(state, form) {
    const auth = state.users.find(
      (user) => user.name === form.name && user.password === form.password
    );
    state.isLogin = typeof auth !== 'undefined';
  },
  checkCanRegister(state, form) {
    const existUser = state.users.find((user) => user.name === form.user);
    state.canRegister = typeof existUser === 'undefined';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
