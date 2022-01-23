<script setup>
import { computed, defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import { processTypes } from '../utilities.js';

const store = useStore();
const props = defineProps({
  todoInfo: {
    title: '',
    priority: 1,
    processType: 1,
  },
  index: {
    type: Number,
    required: true,
  },
});
const priorityValue = computed(() => store.getters['Todo/priorityValue']);
const processType = ref(props.todoInfo.processType);
const onChangeProcessType = () => {
  store.commit('Todo/updateProcessTypeStatus', {
    status: props.todoInfo.processType,
    index: props.index,
  });
};
const editTodo = () => {
  store.dispatch('Todo/showModal');
};
const deleteTodo = () => {
  store.dispatch('Todo/deleteTodo', props.todoInfo);
};
</script>

<template>
  <div class="todo-row">
    <div class="title-wrapper over-flow">
      <span>{{ todoInfo.title }}</span>
    </div>
    <div class="priority">
      <span>{{ priorityValue(todoInfo.priority) }}</span>
    </div>
    <div class="is-done">
      <select v-model="processType" @onChange="onChangeProcessType">
        <option
          v-for="(type, idx) in processTypes"
          :key="idx"
          :value="type.status"
        >
          {{ type.value }}
        </option>
      </select>
    </div>
    <div @click="editTodo" class="edit edit-btn round-btn">
      <span>編集</span>
    </div>
    <div @click="deleteTodo" class="delete delete-btn round-btn">
      <span>削除</span>
    </div>
  </div>
</template>
