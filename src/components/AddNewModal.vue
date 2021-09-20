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
        <button @click="addTodo" :disabled="isDisabled">確定</button>
      </div>
    </div>
  </div>
</template>

<script>
import {priorityTypes} from '../utilities.js'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      priorityTypes: priorityTypes,
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    addTodo() {
      this.$store.commit('Todo/addNewTodo')
      this.$store.commit('Todo/initTodo')
      this.closeModal()
    },
  },
  computed: {
    ...mapGetters({
      newTodo: 'Todo/newTodo',
    }),
    isDisabled() {
      // タイトルが入力されていなければボタンを無効にする
      return this.title === ''
    },
    title: {
      get() {
        return this.newTodo.title
      },
      set(value) {
        this.$store.commit('Todo/setTitle', value)
      }
    },
    priority: {
      get() {
        return this.newTodo.priority
      },
      set(value) {
        this.$store.commit('Todo/setPriority', value)
      }
    },

  }
}
</script>
