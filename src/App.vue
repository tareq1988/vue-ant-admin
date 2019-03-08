<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
.align-right {
  text-align: right;
}

.align-center {
  text-align: center;
}

.float-right {
  float: right;
}

.ant-input-affix-wrapper .anticon {
  color: rgba(0, 0, 0, 0.25);
}
</style>
