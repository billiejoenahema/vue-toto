<script setup>
import { computed, defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import { processTypes } from '../utilities';
import TodoFormModalEdit from './TodoFormModalEdit';

const store = useStore();
const props = defineProps({
  todo: {
    title: '',
    priority: 1,
    processType: 1,
    index: 1,
  },
  index: {
    type: Number,
    required: true,
  },
});
const priorityValue = computed(() => store.getters['Todo/priorityValue']);
const processType = ref(props.todo.processType);
const changeProcessType = () => {
  store.commit('Todo/updateProcessTypeStatus', {
    status: processType.value,
    index: props.index,
  });
};
const isShowModal = ref(false);
const closeModal = () => (isShowModal.value = false);
const deleteTodo = () => {
  if (alert('削除しますか？')) {
    store.commit('Todo/deleteTodo', props.index);
  }
};
</script>

<template>
  <div class="todo-row">
    <div class="title-wrapper over-flow">
      <span>{{ todo.title }}</span>
    </div>
    <div class="priority">
      <span>{{ priorityValue(todo.priority) }}</span>
    </div>
    <div class="is-done">
      <select v-model="processType" @change="changeProcessType">
        <option
          v-for="(type, idx) in processTypes"
          :key="idx"
          :value="type.status"
        >
          {{ type.value }}
        </option>
      </select>
    </div>
    <div @click="isShowModal = true" class="edit edit-btn round-btn">
      <span>編集</span>
    </div>
    <div @click="deleteTodo" class="delete delete-btn round-btn">
      <span>削除</span>
    </div>
  </div>
  <TodoFormModalEdit
    v-if="isShowModal"
    :closeModal="closeModal"
    :currentTodo="todo"
    :index="index"
  />
</template>
