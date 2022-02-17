<script setup>
import { defineProps, reactive, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { maxLength, priorityTypes } from '../utilities.js';
import TodoFormModalWrapper from './TodoFormModalWrapper';

const store = useStore();
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
const isDisabled = ref(true);
const overLength = ref(false);

watchEffect(() => {
  if (!todo.title || todo.title.length > maxLength.title) {
    isDisabled.value = true;
  } else {
    isDisabled.value = false;
  }
  if (todo.title.length > maxLength.title) {
    overLength.value = true;
  } else {
    overLength.value = false;
  }
});
</script>

<template>
  <TodoFormModalWrapper :closeModal="closeModal">
    <div class="input-row">
      <label for="titleInput">タイトル</label>
      <textarea
        :class="{ 'red-border': overLength }"
        v-model="todo.title"
        type="text"
        rows="6"
        id="titleInput"
      ></textarea>
    </div>
    <p class="text-length">
      <span :class="{ red: overLength }">{{ todo.title.length ?? 0 }}</span>
      /
      {{ maxLength.title }}
    </p>
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
      <button class="submit" @click="submitTodo" :disabled="isDisabled">
        更新
      </button>
    </div>
  </TodoFormModalWrapper>
</template>
