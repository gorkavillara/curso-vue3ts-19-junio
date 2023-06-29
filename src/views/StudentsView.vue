<template>
  <div>
    <div>Students</div>
    <button @click="nuevoEstudiante">Añadir nuevo estudiante</button>
    <ul>
      <li v-for="student in studentsStore.students" :key="student.email">
        {{ student.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStudentsStore } from "../stores/studentsStore"
const studentsStore = useStudentsStore()

const nuevoEstudiante = () => {
  studentsStore.addStudent({
    name: "Sandra",
    email: "sandra@sandra.com",
    mark: 2
  })
}

console.log(studentsStore.students)
</script>
