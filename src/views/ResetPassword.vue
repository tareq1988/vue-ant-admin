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
                    <PasswordResetForm></PasswordResetForm>
                </a-col>
            </a-row>
        </a-layout-content>
    </a-layout>
</template>

<script>
import PasswordResetForm from '@/components/PasswordResetForm.vue'
    export default {
        name: 'ResetPassword',
        components:{
            PasswordResetForm
        }
    }
</script>


<style scoped>
    
</style>