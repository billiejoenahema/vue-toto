<script setup>
import { defineProps, reactive } from 'vue';
import store from '../store/index.js';
import { priorityTypes } from '../utilities.js';

const props = defineProps({
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

const closeModal = () => {
  store.commit('Todo/closeModal');
};
const submitTodo = () => {
  if (props.isEdit) {
    store.commit('Todo/updateTodo', todo);
  } else {
    store.commit('Todo/postTodo', todo);
  }
  closeModal();
};
</script>

<template>
  <div class="add-new-area" @click.self="closeModal">
    <div class="input-area">
      <!-- <div>close</div> -->
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
