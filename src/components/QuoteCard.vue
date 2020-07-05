<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title has-text-primary">“{{ text }}”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteCard",
  props: {
    text: String
  }
};
</script>
