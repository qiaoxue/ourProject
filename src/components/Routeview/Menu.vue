<template>
  <div class="menuList">
    <div class="logo"></div>
    <el-menu :default-active="$route.path"
             :default-openeds="$route.path.split('/')"
             class="el-menu-vertical-demo"
             :router=true
             :unique-opened="true"
             theme="dark">
      <template v-for="(item,index) in menus[3].children" v-if="!item.hidden">
        <el-menu-item :index="'/main/'+item.path" v-if="!item.children||item.children.length === 0">
          <template><i class="el-icon-menu"></i><span>{{item.name}}</span></template>
        </el-menu-item>
        <el-submenu :index="item.path" v-else>
          <template slot="title"><i class="el-icon-menu"></i><span>{{item.name}}</span></template>
          <el-menu-item :index="'/main/'+item.path+'/'+child.path" v-for="(child,cIndex) in item.children"
                        :key="cIndex">
            <template><i class="el-icon-menu"></i><span>{{child.name}}</span></template>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import menuList from 'config/router'
  import * as types from 'store/mutation-types'
  export default {
    computed: {
      menus () {
        let self = this
        if (!self.$store.state.menus || self.$store.state.menus.length === 0) {
          self.$store.dispatch(types.MSHOW_LOADING)
          self.$store.state.menus = menuList
          console.log(self.$store.state.menus)
          self.$store.dispatch(types.MHIDE_LOADING)
          return menuList
        } else {
          return self.$store.state.menus
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .menuList {
    width: 180px;
    .logo {
      height: 163px;
      width: 170px;
      background: url(../../assets/img/logo.png) no-repeat;
      background-size: 100% 100%;
    }
    .el-menu--dark {
      background: #1a2227;
    }
    .el-menu--dark .el-submenu .el-menu {
      background-color: #1f2930;
    }
    .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
      color: #738797;
      font-size: 13px;
      font-weight: 600;
      height: 40px;
      line-height: 40px;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
      color: #fff;
    }
    .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
      background: #394754;
      color: #fff;
    }
  }
</style>
