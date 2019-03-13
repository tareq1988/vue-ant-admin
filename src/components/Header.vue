<template>
  <a-layout-header class="site-header">
    <div class="collapse-button" @click="toggleSidebar">
      <a-icon class="trigger" :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"/>
    </div>
    <div class="right-menu">
      <a-popover title="Notifications" trigger="click">
        <div slot="content">Hello There</div>
        <a-badge :dot="true" class="notification-icon">
          <a-icon type="bell"/>
        </a-badge>
      </a-popover>

      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link profile-menu" href="#">
          Hi, {{ user.first_name }} &nbsp;
          <img :src="user.avatar" alt="Avatar">
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/profile" class="ant-dropdown-link">
              <a-icon type="user"/>Profile
            </router-link>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item>
            <router-link to="/logout" class="ant-dropdown-link">
              <a-icon type="logout"/>Logout
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",

  computed: {
    isCollapsed() {
      return this.$store.getters.sidebar !== "full";
    },

    user() {
      return this.$store.getters.user;
    }
  },

  methods: {
    toggleSidebar() {
      let sidebar = this.$store.getters.sidebar;

      sidebar = sidebar == "full" ? "collapsed" : "full";

      this.$store.dispatch("setSidebar", sidebar);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.ant-layout-header.site-header {
  background: #fff;
  height: 62px;
  line-height: 62px;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #eee;
  padding: 0 34px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 256px);
  transition: width 0.2s;

  .collapse-button {
    height: 62px;
    width: 62px;
    line-height: 62px;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #1890ff;
      background-color: #f9f9fc;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;

    .notification-icon {
      height: 31px;
      width: 31px;
      cursor: pointer;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      .anticon {
        font-size: 22px;
        color: #b2b0c7;
      }
    }

    a.profile-menu {
      text-decoration: none;
      color: #444;
      border-left: 1px solid #eee;
      padding-left: 15px;
      margin-left: 15px;

      img {
        max-width: 32px;
        height: auto;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}

.sidebar-collapsed .ant-layout-header.site-header {
  width: calc(100% - 80px);
}

.ant-dropdown-link .anticon {
  min-width: 12px;
  margin-right: 8px;
}
</style>
