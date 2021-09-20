<template>
  <div>
    <div class="todo-row-wrapper" >
      <TodoRow
        v-for="(todoInfo, idx) in todoList"
        :key="idx"
        :todoInfo="todoInfo"
      />
    </div>
  </div>
</template>

<script>
import TodoRow from './TodoRow.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    TodoRow,
  },
  computed: {
    ...mapGetters({
      todoList: 'Todo/todoList',
    })
  }
}
</script>
