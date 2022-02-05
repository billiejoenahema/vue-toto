<script setup>
import { defineProps, reactive } from 'vue';
import store from '../store/index.js';
import { priorityTypes } from '../utilities.js';
import TodoFormModalWrapper from './TodoFormModalWrapper';

const props = defineProps({
  closeModal: {
    type: Function,
    required: true,
  },
});
const newTodo = reactive({
  title: '',
  processType: 1,
  priority: 1,
});

const submitTodo = () => {
  store.commit('Todo/postTodo', newTodo);
  props.closeModal();
};
</script>

<template>
  <TodoFormModalWrapper :closeModal="closeModal">
    <div class="input-row">
      <label for="titleInput">タイトル</label>
      <textarea
        v-model="newTodo.title"
        type="text"
        rows="6"
        id="titleInput"
      ></textarea>
    </div>
    <div class="input-row">
      <label for="priorityType">優先度</label>
      <select v-model="newTodo.priority" id="priorityType">
        <option
          v-for="(type, idx) in priorityTypes"
          :key="idx"
          :value="type.priorityType"
        >
          {{ type.value }}
        </option>
      </select>
    </div>
    <div class="btn-wrapper">
      <button class="submit" @click="submitTodo" :disabled="!newTodo.title">
        確定
      </button>
    </div>
  </TodoFormModalWrapper>
</template>
