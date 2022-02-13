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
const isShowFullText = ref('');
const isHoverTooltip = ref(false);
const isShowButtons = ref(false);
const todoRowHover = ref(false);
const showTitleToolTip = () => {
  isShowFullText.value = true;
};
const hideTitleToolTip = () => {
  setTimeout(() => {
    if (!isHoverTooltip.value) {
      isShowFullText.value = false;
    }
  }, 100);
};
const hoverTooltip = () => {
  isHoverTooltip.value = true;
};
const leaveTooltip = () => {
  isHoverTooltip.value = false;
  hideTitleToolTip();
};
const handleMouseover = () => {
  isShowButtons.value = true;
  todoRowHover.value = true;
};
const handleMouseleave = () => {
  isShowButtons.value = false;
  todoRowHover.value = false;
};
const isShowModal = ref(false);
const closeModal = () => {
  isShowModal.value = false;
};
const isShowDeleteConfirmModal = ref(false);
const deleteTodo = async () => {
  await store.commit('Todo/deleteTodo', props.index);
  isShowDeleteConfirmModal.value = false;
};
</script>
<template>
  <div
    class="todo-row"
    :class="{ todoRowHover: todoRowHover === true }"
    @mouseover="handleMouseover"
    @mouseleave="handleMouseleave"
  >
    <ion-icon
      name="checkbox-outline"
      v-if="todo.processType === 2"
      class="check-mark"
    ></ion-icon>
    <ion-icon name="square-outline" v-else class="check-mark"></ion-icon>
    <div
      class="title-wrapper over-flow"
      :class="{ isDone: todo.processType === 2 }"
      @mouseover="showTitleToolTip"
      @mouseleave="hideTitleToolTip"
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
    <div
      v-if="isShowButtons"
      @click="isShowModal = true"
      class="edit round-btn btn"
    >
      <span>編集</span>
    </div>
    <div
      v-if="isShowButtons"
      @click="isShowDeleteConfirmModal = true"
      class="delete round-btn btn"
    >
      <span>削除</span>
    </div>
    <TodoTitleTooltip
      v-show="isShowFullText"
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
  <div
    v-if="isShowDeleteConfirmModal"
    class="modal-wrapper"
    @click="isShowDeleteConfirmModal = false"
  >
    <div class="modal">
      <ion-icon
        class="close"
        @click="isShowDeleteConfirmModal = false"
        name="close"
      ></ion-icon>
      <div>Todoを削除しますか？</div>
      <div class="btn-wrapper">
        <button class="cancel-btn" @click="isShowDeleteConfirmModal = false">
          キャンセル
        </button>
        <button class="delete-submit" @click="deleteTodo">削除する</button>
      </div>
    </div>
  </div>
</template>
