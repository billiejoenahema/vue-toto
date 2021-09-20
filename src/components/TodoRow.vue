<template>
  <div class="todo-row" >
    <div class="title-wrapper over-flow" >
      <span>{{todoInfo.title}}</span>
    </div>
    <div class="priority" >
      <span>{{priorityType}}</span>
    </div>
    <div class="is-done" >
      <select v-model="processType" >
        <option v-for="(type, idx) in processType"
        :key="idx"
        :value="type.status">
        {{type.value}}
        </option>
      </select>
    </div>
    <div  @click="edit" class="edit edit-btn round-btn" >
      <span>編集</span>
    </div>
    <div @click="deleteTodo" class="delete delete-btn round-btn" >
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
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      processTypes: processTypes,
    };
  },
  computed: {
    priorityType() {
      return priorityTypes.find(
        (type) => type.priorityType === this.todoInfo.priority
      ).value;
    },
    processType: {
      get() {
        return this.todoInfo.processType;
      },
      set(value) {
        this.$store.commit('Todo/updateStatus', {
          status: value,
          idx: this.index,
        });
      },
    },
  },
  methods: {
    edit() {
      this.$store.commit('Todo/editTodo', this.index);
    },
    deleteTodo() {
      this.$store.commit('Todo/deleteTodo', this.index);
    },
  },
}
</script>
