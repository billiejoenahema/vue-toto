<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TodoRow from '../components/TodoRow';

const store = useStore();
const todoList = computed(() => store.getters['Todo/todoList']);
</script>

<template>
  <div class="todo-row-wrapper">
    <TodoRow
      v-for="(todo, idx) in todoList"
      :key="idx"
      :todoInfo="todo"
      :index="idx"
    />
  </div>
</template>
