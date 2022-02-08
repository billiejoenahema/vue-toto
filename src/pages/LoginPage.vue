<script setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = reactive({
  name: '',
  password: '',
});
const errors = computed(() => store.getters['User/errors']);
const canRegister = computed(() => store.getters['User/canRegister']);
const login = () => {
  store.commit('User/login', user);
};
const register = async () => {
  await store.commit('User/checkCanRegister', user);
  if (canRegister.value) {
    store.dispatch('User/register', user);
  }
};
</script>

<template>
  <form>
    <div class="column">
      <label>User Name</label>
      <input type="text" v-model="user.name" />
      <label>Password</label>
      <input type="password" v-model="user.password" />
      <div
        v-show="errors"
        v-for="(error, index) in errors"
        :key="index"
        class="error"
      >
        {{ error }}
      </div>
      <div class="button login" @click="login">Login</div>
      <div class="button register" @click="register">Register</div>
    </div>
  </form>
</template>
