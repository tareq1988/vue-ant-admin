<template>
  <a-card title="Recent Events" class="Custom--Card">
    <a href="#" slot="extra">view all</a>
    <a-list itemLayout="horizontal" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta description="10 min ago">
          <a slot="title" href="https://vuecomponent.github.io/ant-design-vue/">{{item.title}}</a>
          <a-avatar slot="avatar">
            <i class="fa fa-paper-plane" aria-hidden="true" style="color: green;"></i>
          </a-avatar>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script>
export default {
  name: 'RecentData',
  data() {
    return {
      data: [
        {
          title: "Ant design another dummy itle #1"
        },
        {
          title: "Ant design another dummy itle #2"
        },
        {
          title: "Ant design another dummy itle #3"
        },
        {
          title: "Ant design another dummy itle #4"
        },
        {
          title: "Ant design another dummy itle #5"
        },
        {
          title: "Ant design another dummy itle #6"
        }
      ]
    };
  }
};
</script>
