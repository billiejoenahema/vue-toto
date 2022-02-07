import { createStore } from 'vuex';
import Todo from '../modules/Todo';
import User from '../modules/User';

export default createStore({
  modules: {
    Todo,
    User,
  },
});
