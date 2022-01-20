<template>
  <div id="header">
    <div class="app-name-wrapper">
      <span>Todo App</span>
    </div>
    <div class="add-new" @click="showAddNewModal" >新規作成</div>
    <AddNewModal @closeModal="hideAddNewModal" v-if="shouldShowModal" />
  </div>
</template>

<script>
import AddNewModal from './AddNewModal.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    AddNewModal,
  },
  computed: {
    ...mapGetters({
      shouldShowModal: 'Todo/showAddNewModal',
    }),
  },
  methods: {
    showAddNewModal() {
      this.$store.commit('Todo/toggleShowModal', true);
    },
    hideAddNewModal() {
      this.$store.commit('Todo/toggleShowModal', false);
    },
  },
}
</script>
