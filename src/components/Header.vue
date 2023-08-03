<script setup lang="ts">
import profileUrl from "/assets/images/profile.png"
</script>

<template>
  <header class="bg-purple-900 p-4 flex justify-between items-center drop-shadow-xl">
    <div class="flex gap-5">
      <img class="h-8 rounded" :src="profileUrl" alt="Profile image" />
      <h1 class="font-bold text-2xl">Nara DEV</h1>
    </div>
    <div class="flex">
      <p>Missing links</p>
    </div>
  </header>
</template>