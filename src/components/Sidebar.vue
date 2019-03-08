<template>
        <a-layout-sider width="200" style="min-height: 100vh;"
            collapsible
            :trigger="null"
        >
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="inline"
                :defaultSelectedKeys="['1']"
            >
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop" />
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu
                    key="sub1"
                >
                    <span slot="title"><a-icon type="user" /><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu
                    key="sub2"
                >
                    <span slot="title"><a-icon type="team" /><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file" />
                    <span>File</span>
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
<style>
.ant-layout-sider-dark .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
