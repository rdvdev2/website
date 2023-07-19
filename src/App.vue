<script setup lang="ts">
import InConstruction from "./components/InConstruction.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-800 text-white">
    <Header />
    <main class="flex-grow">
      <InConstruction />
    </main>
    <Footer />
  </div>
</template>