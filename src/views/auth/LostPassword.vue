<template>
  <div class="auth-page">
    <a-row>
      <a-col type="flex" justify="space-around" class="login-box" align="middle">
        <img src="@/assets/logo.png" alt class="logo">
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="12" :md="12" :lg="5">
        <PasswordLostForm></PasswordLostForm>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PasswordLostForm from "@/components/auth/PasswordLostForm.vue";
export default {
  name: "LostPassword",
  components: {
    PasswordLostForm
  }
};
</script>

<style scoped>
</style>
