<script setup>
import { defineProps } from 'vue';
defineProps({
  closeModal: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="modal-wrapper" @click.self="closeModal">
    <div class="modal">
      <ion-icon class="close" @click="closeModal" name="close"></ion-icon>
      <slot></slot>
    </div>
  </div>
</template>
