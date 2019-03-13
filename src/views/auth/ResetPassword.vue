<template>
  <div class="auth-page">
    <a-row>
      <a-col type="flex" justify="space-around" class="login-box">
        <img src="@/assets/logo.png" alt class="logo">
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="8">
        <PasswordResetForm></PasswordResetForm>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PasswordResetForm from "@/components/auth/PasswordResetForm.vue";
export default {
  name: "ResetPassword",
  components: {
    PasswordResetForm
  }
};
</script>


<style>
</style>
