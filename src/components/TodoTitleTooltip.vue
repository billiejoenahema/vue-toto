<script setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    required: true,
  },
  hoverTooltip: {
    type: Function,
    required: true,
  },
  leaveTooltip: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div
    class="modal-todo-title-all"
    @mouseover="hoverTooltip"
    @mouseleave="leaveTooltip"
  >
    <div>{{ title }}</div>
  </div>
</template>
