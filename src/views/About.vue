<template>
  <div id="about">
    <HeroBanner title="About Me" />
    <section
      class="section has-background-light has-text-primary has-text-weight-bold"
    >
      <p>
        I have a Master's Degree in Law and I'm currently studying Computer
        Science in Aalto Universtiy (GPA 4.5).
      </p>
      <i class="fa fa-code has-text-weight-bold py-5" aria-hidden="true"></i>
      <p>I'm interested in developing IT solutions for the legal industry.</p>
      <i class="fa fa-code has-text-weight-bold py-5" aria-hidden="true"></i>
      <p>
        I would like to work with full-stack development with modern web
        technologies such as Reach and Python/Java.
      </p>
    </section>
    <section class="section">
      <div class="columns is-centered">
        <WordCloud />
      </div>
      <div class="has-text-light">
        Techonologies, frameworks and tools I have experience with a lot
        (bigger) or less (smaller).
      </div>
    </section>
    <section
      class="section has-background-light has-text-primary has-text-weight-bold"
    >
      <h2 class="subtitle is-3 has-text-primary">What other say about me</h2>
      <div class="columns">
        <QuoteCard text="ajjmai is a creative problem solver." />
        <QuoteCard text="She's constantly thinking of how to improve things." />
        <QuoteCard text="ajjmai is a analytical and critical thinker." />
      </div>
      <div class="columns">
        <QuoteCard text="She's persistent and goal oriented." />
        <QuoteCard text="ajjmai is always willing to help a teammate." />
        <QuoteCard text="ajjmai is solution focused." />
      </div>
    </section>
    <section
      class="section has-background-primary has-text-light has-text-weight-bold"
    ></section>
  </div>
</template>

<script>
import QuoteCard from "@/components/QuoteCard.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import WordCloud from "../components/WordCloud.vue"

export default {
  name: "About",
  components: {
    QuoteCard,
    HeroBanner,
    WordCloud
  }
};
</script>

<style lang="scss">
#word-cloud {
  height: 480px !important;
  width: 640px !important;
}
</style>
