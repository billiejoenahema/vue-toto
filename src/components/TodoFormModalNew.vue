<script setup>
import { defineProps, reactive } from 'vue';
import store from '../store/index.js';
import { priorityTypes } from '../utilities.js';

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
  <div class="add-new-area" @click.self="closeModal">
    <div class="input-area">
      <div>
        <label for="titleInput">タイトル</label>
        <input v-model="newTodo.title" type="text" id="titleInput" />
      </div>
      <div>
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
        <button @click="submitTodo" :disabled="!newTodo.title">確定</button>
      </div>
    </div>
  </div>
</template>
