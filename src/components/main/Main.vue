<script setup lang="ts">
import Hello from "@/components/main/Hello.vue";
import AboutMe from "@/components/main/AboutMe.vue";
import Projects from "@/components/main/Projects.vue";
</script>

<template>
  <main class="flex-grow flex flex-col p-5 items-center gap-5">
    <Hello />
    <AboutMe />
    <Projects />
  </main>
</template>

<style scoped>
main * {
  @apply max-w-screen-xl;
}
</style>