<template>
  <div class="auth-page">
    <a-row>
      <a-col type="flex" justify="space-around" class="login-box" align="middle">
        <router-link to="/">
          <img src="@/assets/logo.png" alt class="logo">
        </router-link>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="12" :md="12" :lg="5">
        <login-form></login-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm
  }
};
</script>

<style lang="less">
body {
  background-color: #f1f3f3 !important;
}

.auth-page {
  padding: 110px 0 144px;

  .logo {
    height: 80px;
    width: 80px;
  }
}
</style>



