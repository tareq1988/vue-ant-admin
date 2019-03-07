<template>
        <a-layout-sider width="200" style="background-color: #1ab188" >
            <a-menu
                mode="inline"
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['sub1']"
                :style="{ height: '100%', borderRight: 0 }"
            >
            
                <a-menu-item key="1">
                    <router-link to="/" class="nav-link">Home</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="/profile" class="nav-link">profile</router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link :to="{path:'/ProfileEdit'}" class="nav-link"> Profile Edit </router-link>
                </a-menu-item>
                 <a-menu-item :key="4">
                     <router-link to="/data" class="nav-link">Data</router-link>
                </a-menu-item>
                <a-menu-item :key="4">
                     <router-link to="/datafilter" class="nav-link">datafilter</router-link>
                </a-menu-item>
                 <a-menu-item :key="6">
                     <router-link to="/logout" class="nav-link">logout</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
