<template>
  <a-layout :class="['container', isCollapsed ? 'sidebar-collapsed' : 'sidebar-full']">
    <Sidebar></Sidebar>
    <a-layout class="content-main">
      <Header></Header>
      <a-layout-content class="content-area">
        <router-view></router-view>
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
  margin-top: 62px;
  position: fixed;
  top: 0;
  left: 256px;
  height: calc(100% - 62px);
  width: calc(100% - 256px);
  overflow: auto;
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
  padding-bottom: 20px;

  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

@media (min-width: 1200px) {
  .content-area.ant-layout-content {
    width: 1170px;
  }
}
</style>
