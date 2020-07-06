<template>
  <div id="projects">
    <hero-banner title="My Projects" />
    <project-info />
    <mimmit-koodaa />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MimmitKoodaa from "@/components/MimmitKoodaa.vue";

export default {
  name: "Projects",
  components: {
    ProjectInfo,
    HeroBanner,
    MimmitKoodaa
  }
};
</script>
