<template>
  <div class="p-4 bg-sky-100 w-screen h-screen flex flex-col gap-2">
    <button
      class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 dark:bg-purple-500 text-lg font-bold text-white"
    >
      Hover me!
      <div
        class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"
      ></div>
    </button>

    <input
      type="text"
      class="transition-all duration-300 outline-none focus:shadow-md py-1 px-2 rounded-md"
    />
  </div>
</template>

<script setup lang="ts"></script>
