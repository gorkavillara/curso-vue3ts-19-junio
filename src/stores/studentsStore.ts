import { ref } from "vue"
import { defineStore } from "pinia"

export interface Student {
  name: string
  mark: number
  email: string
}

export const useStudentsStore = defineStore("students", () => {
  const students = ref<Student[]>([])

  const initializeStudents = (st: Student[]) => {
    students.value = st
  }

  const addStudent = (st: Student) => {
    students.value = [...students.value, st]
  }

  return { students, initializeStudents, addStudent }
})
