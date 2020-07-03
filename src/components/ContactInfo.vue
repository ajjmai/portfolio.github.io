<template>
  <div>
    <p>
      <i :class="icon" aria-hidden="true"></i>
      <a class="content" :href="href">{{ type }}</a>
    </p>
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
