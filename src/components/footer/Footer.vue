<script setup lang="ts">
import Social from "./Social.vue";
</script>

<template>
  <footer class="bg-gray-700 flex flex-col justify-center items-center p-1 text-sm shadow-xl">
    <div class="flex my-2 gap-4">
      <Social href="https://github.com/rdvdev2" img-src="/socials/github.svg" img-alt="GitHub image link"/>
      <Social href="https://modrinth.com/user/rdvdev2" img-src="/socials/modrinth.svg" img-alt="Modrinth image link"/>
      <Social href="https://curseforge.com/members/rdvdev2" img-src="/socials/curseforge.svg" img-alt="Curseforge image link"/>
      <Social href="https://ko-fi.com/rdvdev2" img-src="/socials/kofi.svg" img-alt="Ko-Fi image link"/>
    </div>
    © 2023, Nara Díaz Viñolas. All rights reserved.
  </footer>
</template>