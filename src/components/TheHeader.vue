<script setup>
import TodoFormModalNew from './TodoFormModalNew';
import { ref } from 'vue';

const isShowModal = ref(false);
const closeModal = () => (isShowModal.value = false);
</script>

<template>
  <div id="header">
    <div class="header-inner">
      <div class="app-logo-wrapper">
        <img src="../assets/images/todo_logo_header.jpg" alt="brand logo" />
      </div>
      <ion-icon
        class="create-button"
        @click="isShowModal = true"
        name="add-circle-outline"
      ></ion-icon>
    </div>
    <TodoFormModalNew v-if="isShowModal" :closeModal="closeModal" />
  </div>
</template>
