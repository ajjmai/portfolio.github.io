<template>
  <section class="hero-body">
    <h1 class="title is-1 has-text-light">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    title: String,
    subtitle: String
  }
};
</script>
