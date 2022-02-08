const ERROR_MESSAGE = {
  login: 'ログインに失敗しました。',
  register: '',
};

const state = {
  users: [],
  user: {
    name: '',
    password: '',
  },
  errors: [],
  isLogin: false,
  canRegister: false,
};

const getters = {
  users(state) {
    return state.users;
  },
  errors(state) {
    return state.errors;
  },
  isLogin(state) {
    return state.isLogin;
  },
  canRegister(state) {
    return state.canRegister;
  },
};

const actions = {
  users({ commit }) {
    const res = JSON.parse(localStorage.getItem('users'));
    commit('setUsers', res);
    commit('resetErrors');
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
    if (typeof auth === 'undefined') {
      state.errors.push(ERROR_MESSAGE.login);
    } else {
      state.isLogin = true;
    }
  },
  checkCanRegister(state, form) {
    const existUser = state.users.find((user) => user.name === form.user);
    state.canRegister = typeof existUser === 'undefined';
  },
  resetErrors(state) {
    state.errors = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
