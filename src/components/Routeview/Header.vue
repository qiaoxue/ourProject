<template>
  <div class="header clearfix">
    <div class="leftHead">芝麻互娱广告平台</div>
    <div class="rightHead">
      <span class="icon"></span>
      <span class="username">Jone</span>
      <span class="exit">退出</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  .header {
    height: 75px;
    overflow-y: scroll;
    width: 100%;
    .leftHead {
      float: left;
      margin-top: 39px;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
    }
    .rightHead {
      margin-right: 42px;
      float: right;
      margin-top: 20px;
      span {
        line-height: 50px;
        float: left;
      }
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: url(../../assets/img/003.png) no-repeat;
        background-size: 100% 100%;
      }
      .username {
        padding: 0 10px;
        font-size: 16px;
        margin-left: 10px;
      }
      .exit {
        display: inline-block;
        margin-left: 35px;
        margin-top: 10px;
        width: 35px;
        height: 18px;
        line-height: 18px;
        border-radius: 20px;
        padding: 5px 10px;
        font-size: 13px;
        text-align: center;
        font-weight: 600;
        background: -webkit-linear-gradient(290deg, #2f77bc, #2fb4bc);
      }
    }
  }
</style>
