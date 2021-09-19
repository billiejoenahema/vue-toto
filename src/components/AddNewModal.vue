<template>
  <div class="add-new-area" @click.self="closeModal" >
    <div class="input-area">
      <div>
        <label for="titleInput">タイトル</label>
        <input v-model="title" type="text" id="titleInput">
      </div>
      <div>
        <label for="priorityType">優先度</label>
        <select v-model="priority" id="priorityType">
          <option v-for="(priority, idx) in priorityTypes" :key="idx" :value="priority.priorityType">
            {{priority.value}}
          </option>
        </select>
      </div>
      <div class="btn-wrapper">
        <button class="">確定</button>
      </div>
    </div>
  </div>
</template>

<script>
import {priorityTypes} from '../utilities.js'

export default {
  data() {
    return {
      priorityTypes: priorityTypes,
      title: '',
      priority: 2
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>
