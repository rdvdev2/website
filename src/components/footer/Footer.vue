<script setup lang="ts">
import SocialImageLink from "@/components/footer/SocialImageLink.vue";
import {Social} from "@/types/Social.ts";
import SocialsRaw from "@assets/data/socials.json";

const socials = SocialsRaw.map(Social.fromRawObject)
</script>

<template>
  <footer class="bg-gray-700 flex flex-col justify-center items-center p-1 text-sm shadow-xl">
    <Suspense>
      <div class="flex my-2 gap-4">
        <SocialImageLink v-for="social in socials" :social="social"/>
      </div>
    </Suspense>
    © 2023, Nara Díaz Viñolas. All rights reserved.
  </footer>
</template>