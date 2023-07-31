<script setup lang="ts">
const props = defineProps({
  href: String,
  imgSrc: String,
  imgAlt: String,
});
</script>

<template>
  <a :href="props.href" class="w-fit h-fit aspect-square">
    <img :src="props.imgSrc" :alt="props.imgAlt" class="block m-auto h-10 aspect-square drop-shadow-2xl">
  </a>
</template>