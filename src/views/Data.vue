<template>
  <a-layout id="components-layout-demo-top-side-2">
      <Header></Header>
      <a-layout>
        <Sidebar> </Sidebar>
        <a-layout style="padding: 0 24px 24px">
            <a-layout-content :style="{ background: '#f6f8f8', padding: '24px', margin: 0, minHeight: '280px' }">
                <a-table :columns="columns" :dataSource="data">
                    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
                    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                    <span slot="tags" slot-scope="tags">
                    <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
                    </span>
                    <span slot="action" slot-scope="text, record">
                    <a href="javascript:;">Invite 一 {{record.name}}</a>
                    <a-divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                    <a-divider type="vertical" />
                    <a href="javascript:;" class="ant-dropdown-link">
                        More actions <a-icon type="down" />
                    </a>
                    </span>
                </a-table>
            </a-layout-content>
        </a-layout>

    </a-layout>

  </a-layout>

</template>
<script>
const columns = [{
  dataIndex: 'name',
  key: 'name',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
},{
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}

];
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Data',
    components: {
        Sidebar,
        Header
    },
    data() {
        return {
            data,
            columns,
        }
    }
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