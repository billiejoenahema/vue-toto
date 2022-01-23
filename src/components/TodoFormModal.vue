<script setup>
import { defineProps, reactive } from 'vue';
import store from '../store/index.js';
import { priorityTypes } from '../utilities.js';

const props = defineProps({
  isEdit: {
    type: Boolean,
    required: false,
  },
});
const todo = reactive({
  title: '',
  processType: 1,
  priority: 1,
});

const closeModal = () => {
  store.dispatch('Todo/closeModal');
};
const submitTodo = () => {
  if (props.isEdit) {
    store.dispatch('Todo/updateTodo', todo);
  } else {
    store.dispatch('Todo/postTodo', todo);
  }
  closeModal();
};
</script>

<template>
  <div class="add-new-area" @click.self="closeModal">
    <div class="input-area">
      <div>
        <label for="titleInput">タイトル</label>
        <input v-model="todo.title" type="text" id="titleInput" />
      </div>
      <div>
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
        <button @click="submitTodo" :disabled="!todo.title">
          {{ isEdit ? '更新' : '確定' }}
        </button>
      </div>
    </div>
  </div>
</template>
