<template>
  <div class="todo-card">
    <h2>📋 <span class="judul">Daftar Tugas</span></h2>

    <div class="input-area">
      <input v-model="tugasBaru" @keyup.enter="tambahTugas" placeholder="Tambah tugas baru..." />
      <button @click="tambahTugas">➕</button>
    </div>

    <div class="section">
      <h3>❌ <span class="judul-bagian">Tugas Belum Selesai</span></h3>
      <ul class="todo-list">
        <TodoItem
          v-for="t in todoStore.tugasBelumSelesai"
          :key="t.id"
          :todo="t"
          :toggle="todoStore.toggleSelesai"
          :hapus="todoStore.hapusTugas"
        />
      </ul>
    </div>

    <div class="section">
      <h3>✅ <span class="judul-bagian">Tugas Selesai</span></h3>
      <ul class="todo-list selesai">
        <TodoItem
          v-for="t in todoStore.tugasSelesai"
          :key="t.id"
          :todo="t"
          :toggle="todoStore.toggleSelesai"
          :hapus="todoStore.hapusTugas"
        />
      </ul>
    </div>

    <p class="counter">📌 <strong>Total tugas belum selesai:</strong> {{ todoStore.jumlahBelumSelesai }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/TodoItem.vue'

const todoStore = useTodoStore()
const tugasBaru = ref('')

function tambahTugas() {
  if (tugasBaru.value.trim() !== '') {
    todoStore.tambahTugas(tugasBaru.value)
    tugasBaru.value = ''
  }
}
</script>

<style scoped>
.todo-card {
  background: #fff;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom right, #f3e5f5, #e1f5fe);
}

h2, h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.judul {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a148c;
}

.judul-bagian {
  color: #006064;
}

.input-area {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.input-area input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ce93d8;
  border-radius: 10px;
  font-size: 1rem;
  background: #fffafc;
}

.input-area button {
  background-color: #8e24aa;
  border: none;
  color: white;
  font-size: 1.4rem;
  padding: 0 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.input-area button:hover {
  background-color: #6a1b9a;
}

.section {
  margin-bottom: 1.5rem;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list.selesai li {
  background: #c8e6c9;
  color: #2e7d32;
}

.counter {
  text-align: center;
  font-size: 1rem;
  color: #d81b60;
  margin-top: 2rem;
}
</style>
