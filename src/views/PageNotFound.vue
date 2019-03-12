<template>
  <div class="page-404">
    <h1 class="mb-5">404</h1>
    <p class="text-muted">Sorry, the page you are looking for could not be found.</p>
    <p>
      <router-link to="/">&larr; Back to Home</router-link>
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
.page-404 {
  max-width: 600px;
  margin: 0 auto;
  padding: 110px 0 144px;
  text-align: center;
}
</style>
