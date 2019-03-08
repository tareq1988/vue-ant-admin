<template>
    <a-layout-header class="header">
      <div style="display:flex; justify-content:space-between">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#" style="color:'#fff;">
            Profile Setting <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link :to="{path:'/ProfileEdit'}" class="nav-link"> Profile Edit </router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
