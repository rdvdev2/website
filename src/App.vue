<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/footer/Footer.vue";
import InConstructionBanner from "./components/WIPBanner.vue";
import Main from "./components/main/Main.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-800 text-white">
    <InConstructionBanner />
    <Header />
    <Main />
    <Footer />
  </div>
</template>