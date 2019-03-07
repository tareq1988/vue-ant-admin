<template>
  <a-layout id="components-layout-demo-top-side-2">
    <Header></Header>
    <a-layout>
        <Sidebar> </Sidebar>
        <a-layout style="padding: 0 24px 24px">
            <a-layout-content :style="{ background: '#f6f8f8', padding: '24px', margin: 0, minHeight: '100%' }">
                <div style="background-color: #f9f9f9; padding: 5px;margin-right: 20px">
                    <a-row :gutter="16">
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{background: '#7266ba',color:'#fff'}">
                                <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="8" :style="{color:'#fff'}">
                            <a-card title="Card title" :bordered=false :style="{background: '#23b7e5',color:'#fff'}">
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
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>