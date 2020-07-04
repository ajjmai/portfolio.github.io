<template>
  <div class="is-size-5 has-text-left">
    <a class="content" :href="href">
      <span class="icon has-text-light is-large">
        <i :class="icon" aria-hidden="true"></i>
      </span>
      {{ type }}
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    type: String,
    href: String,
    icon: String
  }
};
</script>
