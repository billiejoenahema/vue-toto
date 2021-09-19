<template>
  <div id="header">
    <div class="app-name-wrapper">
      <span>Todo App</span>
    </div>
    <div class="add-new">新規作成</div>
    <AddNewModal v-if="isShowModal" />
  </div>
</template>

<script>
import AddNewModal from './AddNewModal.vue'
export default {
  components: {
    AddNewModal
  },
  data() {
    return {
      isShowModal: false
    }
  }
}
</script>
