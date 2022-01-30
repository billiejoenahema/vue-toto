<script setup>
import { computed, defineProps, ref } from 'vue';
import { useStore } from 'vuex';
import { processTypes } from '../utilities';
import TodoTitleTooltip from './TodoTitleTooltip';
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
const isShowTitleAll = ref('');
const isHoverTooltip = ref(false);
const showTodoTitleAll = () => {
  isShowTitleAll.value = true;
};
const hideTodoTitleAll = () => {
  setTimeout(() => {
    if (!isHoverTooltip.value) {
      isShowTitleAll.value = false;
    }
  }, 100);
};
const hoverTooltip = () => {
  isHoverTooltip.value = true;
};
const leaveTooltip = () => {
  isHoverTooltip.value = false;
  hideTodoTitleAll();
};
const isShowModal = ref(false);
const closeModal = () => {
  isShowModal.value = false;
};
const deleteTodo = () => {
  if (alert('削除しますか？')) {
    store.commit('Todo/deleteTodo', props.index);
  }
};
</script>

<template>
  <div class="todo-row">
    <div
      class="title-wrapper over-flow"
      @mouseover="showTodoTitleAll"
      @mouseleave="hideTodoTitleAll"
    >
      <span>{{ todo.title }}</span>
    </div>
    <div class="priority">
      <span>{{ priorityValue(todo.priority) }}</span>
    </div>
    <div class="process-type">
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
    <div @click="isShowModal = true" class="edit round-btn btn">
      <span>編集</span>
    </div>
    <div @click="deleteTodo" class="delete round-btn btn">
      <span>削除</span>
    </div>
    <TodoTitleTooltip
      v-show="isShowTitleAll"
      :title="todo.title"
      :hoverTooltip="hoverTooltip"
      :leaveTooltip="leaveTooltip"
    />
  </div>
  <TodoFormModalEdit
    v-if="isShowModal"
    :closeModal="closeModal"
    :currentTodo="todo"
    :index="index"
  />
</template>
