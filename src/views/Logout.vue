<template>
    <div class="home"></div>
</template>

<script>
    export default {
        name: 'Logout',
        beforeCreate () {
            if (this.$store.getters.isAuthenticated) {
                this.$store.dispatch('logout');
                this.$router.push('/login')
            } else {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
    
</style>