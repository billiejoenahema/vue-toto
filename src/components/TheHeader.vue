<script setup>
import TodoFormModal from './TodoFormModal.vue';
import { ref } from 'vue';

const isShowModal = ref(false);
const showTodoFormModal = () => {
  isShowModal.value = true;
};
const hideTodoFormModal = () => {
  isShowModal.value = false;
};
</script>

<template>
  <div id="header">
    <div class="app-name-wrapper">
      <span>Todo App</span>
    </div>
    <div class="add-new" @click="showTodoFormModal">新規作成</div>
    <TodoFormModal @hideTodoFormModal="hideTodoFormModal" v-if="isShowModal" />
  </div>
</template>
