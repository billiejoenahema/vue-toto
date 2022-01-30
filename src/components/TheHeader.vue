<script setup>
import TodoFormModalNew from './TodoFormModalNew';
import { ref } from 'vue';

const isShowModal = ref(false);
const closeModal = () => (isShowModal.value = false);
</script>

<template>
  <div id="header">
    <div class="header-inner">
      <div class="app-name-wrapper">
        <span>Todo App</span>
      </div>
      <div class="add-new" @click="isShowModal = true">新規作成</div>
    </div>
    <TodoFormModalNew v-if="isShowModal" :closeModal="closeModal" />
  </div>
</template>
