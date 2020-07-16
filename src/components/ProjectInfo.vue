  
<template>
  <div class="card">
    <div class="card-content">
      <hr />
      <h4 class="title is-4 has-text-primary">{{ title }}</h4>
      <hr />
    </div>
    <div class="card-image">
      <figure class="image">
        <img :src="require(`@/assets/${image}`)" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h4 class="title is-4 has-text-primary">{{ title }}</h4>
          <hr />
        </div>
      </div>
      <div class="content">
        <h4 class="subtitle is-6 has-text-primary mb-2">Description</h4>
        <vue-simple-markdown class="has-text-primary" :source="description"></vue-simple-markdown>
        <h4 class="subtitle is-6 has-text-primary mb-2 pt-5">Techonologies</h4>
        <vue-simple-markdown class="has-text-primary" :source="technologies"></vue-simple-markdown>
        <h4 class="subtitle is-6 has-text-primary mb-2 pt-5" :style="hasResources">Resources</h4>
        <vue-simple-markdown class="has-text-primary" :source="resources"></vue-simple-markdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectInfoAlt",
  props: {
    title: String,
    description: String,
    technologies: String,
    resources: String,
    image: String,
    hasResources: String
  }
};
</script>

<style lang="scss">
.markdown-body a {
  color: #824a75 !important;
}
</style>
