<template>
  <div class="todo-row" >
    <div class="title-wrapper over-flow" >
      <span>{{todoInfo.title}}</span>
    </div>
    <div class="priority" >
      <span>{{priority}}</span>
    </div>
    <div class="is-done" >
      <select>
        <option v-for="(process, idx) in processType"
        :key="idx"
        :value="process.status">
        {{process.value}}
        </option>
      </select>
    </div>
    <div class="edit edit-btn round-btn" >
      <span>編集</span>
    </div>
    <div class="delete delete-btn round-btn" >
      <span>削除</span>
    </div>
  </div>
</template>

<script>
import {processTypes, priorityTypes} from '../utilities.js'

export default {
  props: {
    todoInfo: {
      type: Object,
      repuired: true,
    }
  },
  data() {
    return {
      processType: processTypes,
    }
  },
  computed: {
    priority() {
      const type = priorityTypes.find((item) => item.priorityType === this.todoInfo.priority)
      if (type) return type.value
      return ''
    }
  }
}
</script>
