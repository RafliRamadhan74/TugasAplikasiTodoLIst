<!-- src/App.vue -->
<template>
  <div class="app-container">
    <TodoListView />
  </div>
</template>

<script setup>
import TodoListView from './views/TodoListView.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #e0f7fa, #fce4ec);
}

.app-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
