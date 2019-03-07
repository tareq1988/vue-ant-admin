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
                    <PasswordLostForm></PasswordLostForm>
                </a-col>
            </a-row>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import PasswordLostForm from '@/components/PasswordLostForm.vue'
    export default {
        name: 'LostPassword',
        components:{
            PasswordLostForm
        }
    }
</script>

<style scoped>
    
</style>