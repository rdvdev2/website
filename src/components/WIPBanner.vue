<script setup lang="ts">
import {reactive, ref} from "vue"

const hidden = ref(false);

const bannerStyle = reactive({
  'h-0': hidden,
  'p-0': hidden,
})

function hide() {
  hidden.value = true;
}
</script>

<template>
  <div class="flex flex-row justify-center bg-yellow-500 p-1.5 transition-all gap-1" :class="bannerStyle">
    <h1 class="text-black italic text-sm">🚧 This website is a Work In Progress! 🚧</h1>
    <button class="underline text-black text-xs" type="button" @click="hide">Hide</button>
  </div>
</template>