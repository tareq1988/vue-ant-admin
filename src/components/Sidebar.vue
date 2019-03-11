<template>
        <a-layout-sider width="256"
            collapsible
            :trigger="null"
            :theme="currentMode"
            :collapsed="isCollapsed"
        >
            <div class="brand">
                Vue Admin
            </div>
            <div class="menu-container">
                <a-menu
                    :theme="currentMode"
                    mode="inline"
                    style="border-right: 0;"
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
            </div>

            <div class="switch-theme">
                <span class="switch-text"><a-icon type="bulb" /> Switch Theme</span>
                <a-switch checkedChildren="Dark" unCheckedChildren="Light" @change="modeSwitched" :defaultChecked="modeStatus" />
            </div>
        </a-layout-sider>
</template>

<script>
export default {
    name: 'Sidebar',

    computed: {
        modeStatus() {
            return this.$store.getters.theme === 'dark'
        },

        currentMode() {
            return this.$store.getters.theme;
        },

        isCollapsed() {
            return this.$store.getters.sidebar !== 'full'
        },
    },

    methods: {
        modeSwitched(checked) {
            let theme = checked ? 'dark' : 'light'

            this.$store.dispatch('setTheme', theme)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.ant-layout-sider .brand {
    height: 62px;
    z-index: 1;
    justify-content: center;
    padding: 0 24px;
    display: flex;
    box-shadow: 0 1px 9px -3px rgba(0,0,0,.2);
    font-size: 22px;
    padding-top: 15px;
    overflow: hidden;
}

.ant-layout-sider.ant-layout-sider-dark,
.ant-layout-sider.ant-layout-sider-dark .switch-theme {
    color: #eee;
}

.ant-layout-sider.ant-layout-sider-dark .brand {
    border-bottom: 1px solid #333;
}

.ant-layout-sider-collapsed .brand {
    font-size: 12px;
}

.ant-layout-sider-collapsed .switch-theme {
    .ant-switch-inner,
    .switch-text {
        display: none;
    }
}

.menu-container {
    height: calc(100vh - 110px);
    padding: 24px 0;
    overflow-x: hidden;
    flex: 1 1;
}

.switch-theme {
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
}
</style>
