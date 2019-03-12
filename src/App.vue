<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  color: #212529 !important;
  background-color: #fff !important;
  height: 100% !important;
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
