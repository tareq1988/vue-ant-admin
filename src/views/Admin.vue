<template>
  <a-layout :class="['container', isCollapsed ? 'sidebar-collapsed' : 'sidebar-full']">
    <Sidebar></Sidebar>
    <a-layout class="content-main">
      <Header></Header>
      <a-layout-content class="content-area">
        <router-view></router-view>

        <footer class="admin-footer">&copy; 2019, The Company.</footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Header
  },

  computed: {
    isCollapsed() {
      return this.$store.getters.sidebar !== "full";
    }
  }
};
</script>

<style lang="less">
.container {
  height: 100%;
}

.ant-layout.content-main {
  background: #f3f5f8;
  padding-top: 62px;
  // position: fixed;
  // top: 0;
  // left: 256px;
  height: 100vh;
  width: calc(100% - 256px);
  overflow-y: scroll;
  overflow: auto;
  flex: 1 1;
}

.sidebar-collapsed .ant-layout.content-main {
  width: calc(100% - 80px);
  left: 80px;
}

.content-area.ant-layout-content {
  padding: 24px 0;
  min-height: 100%;
  margin: 0 auto;
  max-width: 96%;
  min-height: calc(100% - 62px);
  padding-bottom: 20px;

  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

.admin-footer {
  margin-top: 30px;
  padding: 10px 0 20px 0;
  border-top: 1px solid #eee;
  font-size: 13px;
  color: #666;
  text-align: center;
}

@media (min-width: 1200px) {
  .content-area.ant-layout-content {
    width: 1170px;
  }
}
</style>
