<script setup lang="ts">
import Card from "@/components/main/Card.vue";
import Project from "@/components/main/Project.vue";
</script>

<template>
  <Card class="flex-col">
    <h2 class="text-2xl font-bold">Featured projects</h2>
    <p class="text-justify">In this section you'll find my latest and greatest projects, personally selected by me! If you're interested in some of my less important projects, you can <a class="underline" href="#">check them out here</a> too.</p>

    <div class="flex flex-wrap gap-3 justify-center">
      <Project href="#" background="https://media.forgecdn.net/attachments/275/298/2020-01-11_17.png">
        <template #name>Time Travel Mod</template>
        <p>A technology and exploration mod themed around time traveling through history.</p>
      </Project>
      <Project href="#" background="https://media.forgecdn.net/avatars/293/332/637328852126283848.png">
        <template #name>Disable Custom Worlds Advice</template>
        <p>A simple utility Minecraft mod that removes the annoying "Experimental settings" warning screen.</p>
      </Project>
      <Project href="#" background="https://jutge.org/ico/welcome/jutge.png">
        <template #name>Advocat</template>
        <p>A script that streamlines your jutge.org assignments by automatically compiling and testing your work. Beware the documentation is written in Catalan.</p>
      </Project>
      <Project href="#" background="https://images.unsplash.com/photo-1557701197-2f99da0922dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80">
        <template #name>SISA Assembler</template>
        <p>An assembler for the SISC-vn computer, written in Rust!</p>
      </Project>
    </div>
  </Card>
</template>