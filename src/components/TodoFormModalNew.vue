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
const isDisabled = ref(true);
const overLength = ref(false);

watchEffect(() => {
  if (!newTodo.title || newTodo.title.length > maxLength.title) {
    isDisabled.value = true;
  } else {
    isDisabled.value = false;
  }
  if (newTodo.title.length > maxLength.title) {
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
        v-model="newTodo.title"
        type="text"
        rows="6"
        id="titleInput"
      ></textarea>
    </div>
    <p class="text-length">
      <span :class="{ red: overLength }">{{ newTodo.title.length ?? 0 }}</span>
      /
      {{ maxLength.title }}
    </p>
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
      <button class="submit" @click="submitTodo" :disabled="isDisabled">
        確定
      </button>
    </div>
  </TodoFormModalWrapper>
</template>
