<script setup>
import TheHeader from './components/TheHeader.vue';
import TodoList from './pages/TodoList.vue';
</script>

<template>
  <TheHeader />
  <div class="main-content">
    <TodoList />
  </div>
</template>

<style>
@import 'assets/style.css';
</style>
