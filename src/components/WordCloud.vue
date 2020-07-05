<template>
  <vue-word-cloud
    id="word-cloud"
    :words="[
      ['Scala', 11],
      ['Python', 11],
      ['Java', 10],
      ['JavaScript', 9],
      ['HTML', 8],
      ['CSS', 8],
      ['XML', 7],
      ['Git', 7],
      ['SQL', 6],
      ['React', 6],
      ['Node.js', 5],
      ['Bootstrap', 5],
      ['Django', 5],
      ['C', 5],
      ['JSON', 5],
      ['Spring Boot', 4],
      ['Thymeleaf', 3],
      ['Heroku', 4],
      ['C++', 4],
      ['Vue.js', 4],
      ['React Native', 4],
      ['RestAPI', 4],
      ['Axios', 4],
      ['Akoma Ntoso', 3],
      ['Bulma', 3],
      ['ggplot2', 3],
      ['R', 3],
      ['Semantic UI', 3],
      ['Unity', 2],
      ['AngularJS', 2],
      ['Gradle', 2],
      ['Cucumber', 2],
      ['Selenium', 2],
      ['Mockito', 2],
      ['GraphQL', 2],
      ['C#', 2],
      ['Arduino', 2]
    ]"
    :color="
      ([, weight]) =>
        weight > 8
          ? '#ec8539'
          : weight > 6
          ? '#d494b1'
          : weight > 4
          ? '#e8c064'
          : '#dde3e1'
    "
    font-family="Simonetta"
  />
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  name: "WordCloud",
  components: {
    [VueWordCloud.name]: VueWordCloud
  }
};
</script>
