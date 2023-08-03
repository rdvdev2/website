<script setup lang="ts">

const props = defineProps<{
  'background': URL | String,
  'href': URL | String,
}>();

function openLink() {
  open(props.href.toString(), "_self");
}
</script>

<template>
  <div @click="openLink" class="bg-black overflow-hidden aspect-square max-w-xs rounded-3xl border-purple-500 border-2 transition-all hover:scale-105 cursor-pointer">
    <div id="inner" class="grid grid-cols-1 grid-rows-2 items-center p-4 w-full h-full transition-all opacity-70 hover:opacity-100">
      <h1 class="text-xl font-bold text-center"><slot name="name"></slot></h1>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
#inner {
  --background-overlay: rgba(0, 0, 0, 0.6);
  background: linear-gradient(var(--background-overlay), var(--background-overlay)), v-bind("`url('${props.background}')`") center / cover;
}
</style>