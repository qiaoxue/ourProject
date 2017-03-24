<template>
  <div class="all">
    <div class="menu">
      <menu-list></menu-list>
    </div>
    <div class="content">
      <header-nav></header-nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import header from './Header'
  import menu from './Menu'
  export default {
    components: {
      'header-nav': header,
      'menu-list': menu
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .all {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #1a1f22;
    position: relative;
    .menu {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 180px;
      overflow-y: auto;
      float: left;
      background: #1a2227;
    }
    .content {
      margin-left: 210px;
      .container{
        height: 800px;
        padding-right: 42px;
        padding-top: 50px;
      }
    }
  }
</style>
