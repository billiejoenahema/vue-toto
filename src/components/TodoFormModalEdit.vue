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
  currentTodo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const todo = reactive({
  title: props.currentTodo.title,
  processType: props.currentTodo.processType,
  priority: props.currentTodo.priority,
});

const submitTodo = () => {
  store.commit('Todo/updateTodo', {
    todo,
    index: props.index,
  });
  props.closeModal();
};
</script>

<template>
  <TodoFormModalWrapper :closeModal="closeModal">
    <div class="input-row">
      <label for="titleInput">タイトル</label>
      <textarea
        v-model="todo.title"
        type="text"
        rows="6"
        id="titleInput"
      ></textarea>
    </div>
    <div class="input-row">
      <label for="priorityType">優先度</label>
      <select v-model="todo.priority" id="priorityType">
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
      <button class="submit" @click="submitTodo" :disabled="!todo.title">
        更新
      </button>
    </div>
  </TodoFormModalWrapper>
</template>
