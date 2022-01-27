<script setup>
import { defineProps, reactive } from 'vue';
import store from '../store/index.js';
import { priorityTypes } from '../utilities.js';

const props = defineProps({
  closeModal: {
    type: Function,
    required: true,
  },
  currentTodo: {
    type: Object,
    required: true,
  },
});
const todo = reactive({
  title: props.currentTodo.title,
  processType: props.currentTodo.processType,
  priority: props.currentTodo.priority,
  index: props.currentTodo.index,
});

const submitTodo = () => {
  if (props.isEdit) {
    store.commit('Todo/updateTodo', todo);
  } else {
    store.commit('Todo/postTodo', todo);
  }
  props.closeModal();
};
</script>

<template>
  <div class="add-new-area" @click.self="closeModal">
    <div class="input-area">
      <ion-icon class="close" @click="closeModal" name="close"></ion-icon>
      <div class="input-row">
        <label for="titleInput">タイトル</label>
        <input v-model="todo.title" type="text" id="titleInput" />
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
      <div>
        <button class="submit" @click="submitTodo" :disabled="!todo.title">
          更新
        </button>
      </div>
    </div>
  </div>
</template>
