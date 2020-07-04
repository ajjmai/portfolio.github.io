<template>
  <section class="hero is-cover is-relative is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">Hi, this is @{{ name }}.</h1>
        <h2 class="subtitle is-2">Lawyer and Software Developer.</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    name: String
  }
};
</script>
