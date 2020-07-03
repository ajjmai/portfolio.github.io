<template>
  <div id="contact">
    <h1>Contact</h1>
    <ContactInfo icon="fa fa-envelope" href="mailto:a@a.fi" type="Email" />
    <ContactInfo icon="fa fa-linkedin" href="address" type="LinkedIn" />
    <ContactInfo
      icon="fa fa-github"
      href="https://github.com/ajjmai"
      type="GitHub"
    />
    <ContactInfo
      icon="fa fa-codepen"
      href="https://codepen.io/ajjmai"
      type="CodePen"
    />
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
