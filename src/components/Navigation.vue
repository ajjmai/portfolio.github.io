<template>
  <nav id="nav" class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p id="logo" class="navbar-item is-size-4">@ajjmai</p>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        v-bind:class="{ 'is-active': showNav }"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-menu" class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/projects" class="navbar-item">Projects</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  data: function() {
    return {
      showNav: false
    };
  }
};
</script>
