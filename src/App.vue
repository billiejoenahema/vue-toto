<script setup>
import TheHeader from './components/TheHeader';
import LoginPage from './pages/LoginPage';
import TodoList from './pages/TodoList';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('User/users');
const isLogin = computed(() => store.getters['User/isLogin']);
</script>

<template>
  <TheHeader />
  <div class="main-content">
    <TodoList v-if="isLogin" />
    <LoginPage v-else />
  </div>
</template>

<style>
@import 'assets/style.css';
</style>
