<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import InConstructionBanner from "./components/WIPBanner.vue";
import AboutMe from "./components/AboutMe.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-800 text-white">
    <InConstructionBanner />
    <Header />
    <main class="flex-grow flex flex-col p-5 items-center">
      <AboutMe />
    </main>
    <Footer />
  </div>
</template>