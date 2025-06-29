<template>
  <li :class="{ done: todo.selesai }">
    <label>
      <input
        type="checkbox"
        :checked="todo.selesai"
        @change="toggle(todo.id)"
      />
      <span>{{ todo.nama }}</span>
    </label>
    <button @click="hapus(todo.id)">🗑</button>
  </li>
</template>

<script setup>
defineProps(['todo', 'toggle', 'hapus'])
</script>

<style scoped>
li {
  background: #f1f8e9;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
}

li.done {
  background-color: #e0f2f1;
  text-decoration: line-through;
  color: #757575;
}

button {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #e53935;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  color: #b71c1c;
}
</style>
