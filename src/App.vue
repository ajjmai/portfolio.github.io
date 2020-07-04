<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
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
$primary: #0b5563;
$body-background-color: #0b5563;
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
    color: #88a096;
    margin-right: 3px;

    &.router-link-exact-active {
      color: white;
      background-color: #0b5563;
    }
  }
  a:hover {
    background-color: #0d6b7e;
  }
}

#nav #logo,
.title,
.subtitle {
  color: white;
}

footer {
  background-color: 88a096;
  color: #0b5563;
  a {
    color: #0b5563;
  }
}
</style>
