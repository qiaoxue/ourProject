<template>
  <div class="ps-panel">
    <p class="title">{{title}}</p>
    <div :class="{'panel-container':show }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      show: {
        type: String,
        default: false,
        required: true
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .ps-panel {
    .title {
      padding: 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      border-bottom: 1px dotted #5f6264;
    }
    .panel-container {
      padding: 20px 0;
    }
  }
</style>
