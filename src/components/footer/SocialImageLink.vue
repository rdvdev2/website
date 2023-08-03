<script setup lang="ts">
import {Social} from "../../types/Social.ts";

const props = defineProps<{
  social: Social,
}>()

const imgUrl = await props.social.logo;
</script>

<template>
  <a :href="social.link.href" class="w-fit h-fit aspect-square">
      <img :src="imgUrl.href" :alt="`An image link to ${social.name}`" class="block m-auto h-10 aspect-square drop-shadow-2xl">
  </a>
</template>