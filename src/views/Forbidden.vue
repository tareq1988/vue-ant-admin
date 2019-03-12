<template>
  <div class="page-404 mb-5 mt-5 pt-5 pb-5 text-center">
    <h1 class="mb-5">Forbidden</h1>
    <p class="text-muted">Sorry, you are not allowed to access this page.</p>
    <p>
      <router-link to="/" class="nav-link">&larr; Back to Home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",

  data() {
    return {};
  }
};
</script>

<style lang="css">
</style>
