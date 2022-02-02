import { createStore } from 'vuex';
import Todo from '../modules/Todo.js';

export default createStore({
  modules: {
    Todo,
  },
});
