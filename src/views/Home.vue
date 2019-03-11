<template>
    <a-layout class="container">
        <Sidebar></Sidebar>
        <a-layout style="padding-top: 62px;">
            <Header></Header>
            <a-layout-content class="content-area">
                <div style="">
                    <a-row :gutter="16">
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{color:'#fff'}">
                                <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{color:'#fff'}">
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>
                        </a-col>
                    </a-row>

                    <a-row :gutter="16">
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{color:'#fff'}">
                                <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{color:'#fff'}">
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>
                        </a-col>
                    </a-row>
                </div>
                <a-row :gutter="24" style="margin-top: 30px;">
                    <a-col :span="6">
                        <RecentData> </RecentData>
                    </a-col>
                    <a-col :span="6">
                        <RecentData> </RecentData>
                    </a-col>
                    <a-col :span="6">
                        <RecentData> </RecentData>
                    </a-col>
                    <a-col :span="6">
                        <RecentData> </RecentData>
                    </a-col>
                </a-row>
            </a-layout-content>
        </a-layout>

    </a-layout>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import RecentData from '@/components/RecentData.vue'
export default {
    name: 'Home',
    components: {
        Sidebar,
        Header,
        RecentData
    },
}
</script>

<style>
.container {
    height: 100%;
}

.content-area.ant-layout-content {
    overflow-y: scroll;
    padding: 24px;
    background: #f3f5f8;
    min-height: 100%;
    margin: 0;
}
</style>
