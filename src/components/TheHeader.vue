<script setup>
import TodoFormModal from './TodoFormModal.vue';
import { computed } from 'vue';
import store from '../store';

const isShowModal = computed(() => store.getters['Todo/isShowModal']);
const showTodoFormModal = () => {
  store.dispatch('Todo/showModal');
};
</script>

<template>
  <div id="header">
    <div class="app-name-wrapper">
      <span>Todo App</span>
    </div>
    <div class="add-new" @click="showTodoFormModal">新規作成</div>
    <TodoFormModal v-if="isShowModal" />
  </div>
</template>
