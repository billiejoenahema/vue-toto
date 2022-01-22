<script setup>
import { defineEmits, defineProps } from 'vue';
import { priorityTypes } from '../utilities.js';

const props = defineProps({
  isEdit: Boolean,
});
const emit = defineEmits(['hideTodoFormModal']);
const newTodo = {
  title: '',
  processType: 1,
  priority: 1,
};

const closeModal = () => {
  emit('hideTodoFormModal');
};
const addTodo = () => {
  closeModal();
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
        <button
          v-if="props.isEdit"
          @click="editTodo"
          :disabled="!newTodo.title"
        >
          更新
        </button>
        <button v-else @click="addTodo" :disabled="!newTodo.title">確定</button>
      </div>
    </div>
  </div>
</template>
