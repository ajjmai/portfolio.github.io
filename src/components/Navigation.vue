<template>
  <nav
    id="nav"
    class="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <p id="logo" class="navbar-item is-size-3">@ajjmai</p>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/projects" class="navbar-item">Projects</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
      </div>
    </div>
  </nav>
</template>
