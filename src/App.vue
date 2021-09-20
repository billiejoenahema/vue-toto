<template>
  <Header />
  <div class="main-content">
    <Todo />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Todo from './components/Todo.vue'

export default {
  ame: 'App',
  components: {
    Header,
    Todo,
  }
}
</script>

<style>
  @import 'assets/style.css'
</style>
