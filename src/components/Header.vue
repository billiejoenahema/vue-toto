<template>
  <div id="header">
    <div class="app-name-wrapper">
      <span>Todo App</span>
    </div>
    <div class="add-new" @click="newPost" >新規作成</div>
    <AddNewModal @closeModal="closeModal" v-if="isShowModal" />
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
  },
  methods: {
    newPost: function() {
      this.isShowModal = true
    },
    closeModal: function() {
      this.isShowModal = false
    }
  },
}
</script>
