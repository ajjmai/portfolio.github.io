<template>
  <div>
    <section class="section">
      <h1 class="title is-2 has-text-light">{{ project.title }}</h1>
      <h2 class="subtitle is-4 has-text-light">{{ project.snippet }}</h2>
    </section>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-thirds">
            <vue-simple-markdown class="has-text-light has-text-weight-bold" :source="project.body"></vue-simple-markdown>
          </div>
          <div class="column is-one-third">
            <div class="columns is-multiline">
              <div class="column is-full" v-for="image in project.images" v-bind:key="image">
                <img :src="image.url" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService";
export default {
  name: "Project",
  data() {
    return {
      airtableresponse: []
    };
  },
  mounted: function() {
    let self = this;
    async function getProject() {
      try {
        const response = await ProjectsService.getProject(
          self.$route.params.slug
        );
        console.log(response);
        self.airtableresponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getProject();
  },
  computed: {
    project() {
      let self = this;
      if (self.airtableresponse[0]) {
        let thisProject = {
          title: self.airtableresponse[0].fields.Title,
          snippet: self.airtableresponse[0].fields.Excerpt,
          images: self.airtableresponse[0].fields.Image,
          body: self.airtableresponse[0].fields.Body
        };
        return thisProject;
      }
      return null;
    }
  }
};
</script>

<style lang="scss">
.markdown-body a {
    color: #dde3e1 !important;
}
</style>
