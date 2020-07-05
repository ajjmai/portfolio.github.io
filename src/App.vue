<template>
  <div id="app">
    <section class="hero is-large">
      <section class="hero-head">
        <Navigation />
      </section>
      <router-view />
      <section class="hero-foot">
        <Footer />
      </section>
    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style lang="scss">
$light: #dde3e1;
$primary: #0b5563;
$danger: #824a75;
$body-background-color: $primary;
$footer-background-color: $light;
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  #logo,
  a {
    font-weight: bold;
    color: #0b5563;
    margin-right: 3px;

    &.router-link-exact-active {
      color: #824a75;
    }
  }
}

#nav #logo {
  color: #0b5563;
}
.hero .navbar {
  background-color: #dde3e1;
}

footer {
  color: #0b5563;
  a {
    color: #0b5563;
  }
}
</style>
