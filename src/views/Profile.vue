<template>
  <a-layout id="components-layout-demo-top-side-2">
        <Header> </Header>
        <a-layout>
            <Sidebar> </Sidebar>
            <a-layout style="padding: 0 24px 24px">
                <a-layout-content :style="{ background: '#f6f8f8', padding: '24px', margin: 0, minHeight: '280px' }">
                <h1>   Profile Page Content </h1>
                </a-layout-content>
            </a-layout>
        </a-layout>

  </a-layout>

</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import Header from '@/components/Header.vue'
    export default {
        name: 'Profile',
        components: {
            Sidebar,
            Header,
        },
    }
</script>

<style scoped>
    
</style>