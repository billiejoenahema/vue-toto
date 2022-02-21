<ProgressBar :currentLength="current" :maxLength="max" />

<script setup>
import { defineProps, ref, watchEffect } from 'vue';
const props = defineProps({
  currentLength: {
    type: Number,
    required: true,
  },
  maxLength: {
    type: Number,
    required: true,
  },
});
const progress = ref(0);
watchEffect(() => {
  progress.value = Math.round((props.currentLength / props.maxLength) * 100);
});
</script>

<template>
  <div :style="'width: ' + progress + '%'">{{ progress }} %</div>
</template>
