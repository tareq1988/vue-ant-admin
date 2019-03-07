<template>
    <a-layout :style="{background:'#f1f3f3',minHeight:'760px'}">
        <a-layout-content>
            <a-row>
                <a-col type="flex" justify="space-around" class="login-box">
                <img src="@/assets/logo.png" alt class="logo">
                </a-col>
            </a-row>
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="8">
                    <login-form></login-form>
                </a-col>
            </a-row>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import LoginForm from '@/components/LoginForm.vue'
    export default {
        name: 'LoginPage',
        components: {
            LoginForm,
        },
    }
</script>

<style scoped>
  .body {
    width: 100%;
  }
  .logo {
    height: 80px;
    width: 80px;
  }
  .login-box {
    margin-top: 10%;
  }
</style>



