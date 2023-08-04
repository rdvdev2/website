<script setup lang="ts">
import Card from "@/components/main/Card.vue";
import ProjectCard from "@/components/main/ProjectCard.vue";
import ProjectsRaw from "@assets/data/projects.json?raw"
import {Project} from "@/types/Project.ts";

const projects = Project.parseJSONArray(ProjectsRaw);
</script>

<template>
  <Card class="flex-col">
    <h2 class="text-2xl font-bold">Featured projects</h2>
    <p class="text-justify">In this section you'll find my latest and greatest projects, personally selected by me! If you're interested in some of my less important projects, you can <a class="underline" href="#">check them out here</a> too.</p>

    <div class="flex flex-wrap gap-3 justify-center">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </Card>
</template>