<template>
  <div id="home">
    <section class="hero-body">
      <h1 class="title is-1">Hi, this is @ajjmai.</h1>
      <h2 class="subtitle is-2">
        Lawyer and Software Developer.
      </h2>
      <h3 class="subtitle is-3">With passion for ...</h3>
    </section>
    <job-info />
  </div>
</template>

<script>
import JobInfo from "../components/JobInfo";

export default {
  name: "Home",
  components: {
    JobInfo
  }
};
</script>
