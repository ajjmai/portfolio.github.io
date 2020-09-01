<template>
  <div id="contact" class="hero-body is-medium">
    <div class="containter">
      <h1 class="title is-1 has-text-light">Contact</h1>
      <div class="columns is-centered">
        <div class="column is-narrow">
          <contact-info
            icon="fa fa-linkedin"
            href="https://www.linkedin.com/in/aija-valleala/"
            type="linkedin.com/in/aija-valleala/"
          />
          <contact-info
            icon="fa fa-github"
            href="https://github.com/ajjmai"
            type="github.com/ajjmai"
          />
          <contact-info
            icon="fa fa-codepen"
            href="https://codepen.io/ajjmai"
            type="codepen.io/ajjmai"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "Contact",
  components: {
    ContactInfo
  }
};
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: white;
}
</style>
