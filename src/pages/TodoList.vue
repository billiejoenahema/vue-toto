<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ProgressBar from '../components/ProgressBar';
import TodoRow from '../components/TodoRow';

const store = useStore();
store.dispatch('Todo/get');
const todoList = computed(() => store.getters['Todo/todoList']);
const current = ref(0);
const max = 100;
const countUp = () => {
  current.value += 1;
};
</script>

<template>
  <div class="todo-row-wrapper">
    <ProgressBar :currentLength="current" :maxLength="max" />
    <button @click="countUp">+</button>
    <TodoRow
      v-for="(todo, idx) in todoList"
      :key="idx"
      :todo="todo"
      :index="idx"
    />
  </div>
</template>
