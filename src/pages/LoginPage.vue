<script setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { maxLength } from '../utilities';

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
const isDisabled = ref(true);
const isOver = reactive({
  userName: false,
  password: false,
});
const checkLength = (prop) => {
  maxLength[prop] < user[prop].length
    ? (isOver[prop] = true)
    : (isOver[prop] = false);
};
</script>

<template>
  <form>
    <div class="column">
      <label for="userName">User Name</label>
      <input
        id="userName"
        type="text"
        v-model="user.name"
        :class="{ 'red-border': isOver.name }"
        @keydown="checkLength('name')"
      />
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="user.password"
        :class="{ 'red-border': isOver.password }"
        @keydown="checkLength('password')"
      />
      <div
        v-show="errors"
        v-for="(error, index) in errors"
        :key="index"
        class="error"
      >
        {{ error }}
      </div>
      <div class="button login" @click="login" :disabled="isDisabled">
        Login
      </div>
      <div class="button register" @click="register" :disabled="isDisabled">
        Register
      </div>
    </div>
  </form>
</template>
