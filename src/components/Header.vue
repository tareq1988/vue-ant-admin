<template>
    <a-layout-header class="site-header"
      :style="headerWidth"
    >
      <div class="collapse-button">
        <a-icon
          class="trigger"
          :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebar"
        />
      </div>
      <div class="right-menu">
        <a-popover
          title="Notifications"
          trigger="click"
        >
          <div slot="content">Hello There</div>
          <a-badge :dot="true" class="notification-icon"><a-icon type="bell" /></a-badge>
        </a-popover>
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link profile-menu" href="#">
            Hi, Tareq &nbsp;
            <img src="https://www.gravatar.com/avatar/8584491809f902b86fae495a5830be83?s=128&d=retro&r=g" alt="Avatar">
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">Profile</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">Logout</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    isCollapsed() {
      return this.$store.getters.sidebar !== 'full'
    },

    headerWidth() {
      let width = this.isCollapsed ? '80px' : '256px'

      return {
        width: 'calc(100% - ' + width + ')'
      }
    }
  },

  methods: {
    toggleSidebar() {
      let sidebar = this.$store.getters.sidebar

      sidebar = ( sidebar == 'full' ) ? 'collapsed' : 'full'

      this.$store.dispatch('setSidebar', sidebar)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.ant-layout-header.site-header {
  background: #fff;
  height: 62px;
  width: 100%;
  line-height: 62px;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 4px 4px 40px 0 rgba(0,0,0,.05);
  border-bottom: 1px solid #eee;
  padding: 0 34px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.ant-layout-sider-collapsed .brand {
    font-size: 12px;
  }

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
</style>
