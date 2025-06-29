// src/stores/todo.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    tambahTugas(nama) {
      this.todos.push({ id: Date.now(), nama, selesai: false })
    },
    hapusTugas(id) {
      this.todos = this.todos.filter(tugas => tugas.id !== id)
    },
    toggleSelesai(id) {
      const tugas = this.todos.find(tugas => tugas.id === id)
      if (tugas) tugas.selesai = !tugas.selesai
    }
  },
getters: {
  jumlahBelumSelesai: state => state.todos.filter(t => !t.selesai).length,
  tugasBelumSelesai: state => state.todos.filter(t => !t.selesai),
  tugasSelesai: state => state.todos.filter(t => t.selesai)
}
})
