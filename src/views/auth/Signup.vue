<template>
    <a-layout :style="{background:'#f1f3f3',minHeight:'760px'}">
        <a-layout-content>
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
        </a-layout-content>
    </a-layout>
</template>

<script>
    import SignupForm from '@/components/auth/SignupForm.vue'
    export default {
        name: 'Signup',
        components:{
            SignupForm
        }
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
  .signup-box {
    margin-top: 10%;
  }
</style>
