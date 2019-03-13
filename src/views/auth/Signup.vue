<template>
  <div class="auth-page">
    <a-row>
      <a-col type="flex" justify="space-around" class="signup-box" align="middle">
        <router-link to="/">
          <img src="@/assets/logo.png" alt class="logo">
        </router-link>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="12" :md="10" :lg="7">
        <SignupForm></SignupForm>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SignupForm from "@/components/auth/SignupForm.vue";
export default {
  name: "Signup",
  components: {
    SignupForm
  }
};
</script>


<style>
</style>
