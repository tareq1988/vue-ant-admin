<template>
    <a-layout>
        <a-layout-content>
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
        </a-layout-content>
    </a-layout>
</template>

<script>
    import LoginForm from '@/components/auth/LoginForm.vue'
    export default {
        name: 'LoginPage',
        components: {
            LoginForm,
        },
    }
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    background-color: #f1f3f3 !important;
  }
  .logo {
    height: 80px;
    width: 80px;
  }
  .login-box {
    margin-top: 10%;
  }
</style>



