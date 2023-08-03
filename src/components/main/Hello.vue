<script setup lang="ts">
import Card from "./Card.vue";

import irlUrl from "/assets/images/irl.jpg"
</script>

<template>
  <Card>
    <img class="rounded-full w-20 border-2 border-purple-400" :src="irlUrl" alt="Profile image">
    <div class="text-justify max-w-prose">
      <h1 class="text-lg font-bold">Hi, I'm Nara!</h1>
      <p>I’m an amateur developer and a Computer Engineering student at the UPC on Barcelona.</p>
    </div>
  </Card>
</template>