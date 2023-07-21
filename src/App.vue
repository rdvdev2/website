<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import InConstructionBanner from "./components/WIPBanner.vue";
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-800 text-white">
    <InConstructionBanner />
    <Header />
    <main class="flex-grow">
    </main>
    <Footer />
  </div>
</template>