<template>
  <div id="contact" class="hero-body is-medium">
    <div class="containter">
      <h1 class="title is-1 has-text-light">Contact</h1>
      <div class="columns is-centered">
        <div class="column is-narrow">
          <ContactInfo icon="fa fa-envelope" href="mailto:a@a.fi" type="Email" />
          <!-- <ContactInfo icon="fa fa-linkedin" href="address" type="LinkedIn" /> -->
          <ContactInfo
            icon="fa fa-github"
            href="https://github.com/ajjmai"
            type="github.com/ajjmai"
          />
          <ContactInfo
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
