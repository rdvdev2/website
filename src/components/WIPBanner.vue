<script setup lang="ts">
import {computed, ref} from "vue"

const hidden = ref(false);

const bannerStyle = computed(() => ({
  'h-0': hidden.value,
  'p-0': hidden.value,
  'p-1.5': !hidden.value,
}))
</script>

<template>
  <div class="flex flex-row justify-center bg-yellow-500 transition-all gap-1" :class="bannerStyle">
    <h1 class="text-black italic text-sm">🚧 This website is a Work In Progress! 🚧</h1>
    <button class="underline text-black text-xs" type="button" @click="hidden = true">Hide</button>
  </div>
</template>