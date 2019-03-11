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
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 15px !important;
  line-height: 1.5 !important;
  color: rgba(0, 0, 0, 0.65) !important;
  background-color: #fff !important;
  height: 100% !important;
  overflow-y: hidden !important;
}

#app {
  height: 100%;
}

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
