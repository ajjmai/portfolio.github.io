<template>
  <div id="projects">
    <HeroBanner title="My Projects" />
    <ProjectInfo />
    <MimmitKoodaa />
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
