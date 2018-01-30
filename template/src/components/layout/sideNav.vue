<template>
  <div class="g-side">
    <nav class="m-side-nav">
      <el-menu
        router
        :default-openeds="defaultOpeneds"
        :unique-opened="uniqueOpen"
        :default-active="$route.path"
        class="el-menu-side">
        <el-submenu
          v-for="menu in sideMenus"
          :key="menu.url"
          :index="menu.url">
          <template slot="title">
            <span class="u-text">{{menu.name}}</span>
          </template>
          <el-menu-item v-for="(subMenuItem, index) in menu.subMenus" :key="index" :index="subMenuItem.url">
            <span class="u-text">{{subMenuItem.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </nav>
    <a href="javascript:;" class="u-toggle" @click="toggleSideNav"></a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'side-nav',
  data () {
    return {
      defaultOpeneds: [],
      uniqueOpen: true
    }
  },
  computed: mapState([
    'sideMenus'
  ]),
  watch: {
    sideMenus () {
      let path = this.$route.path
      this.sideMenus.forEach(item => {
        let regexp = new RegExp(`^${item.url}`)
        if (regexp.test(path)) {
          this.defaultOpeneds.push(item.url)
        }
      })
    }
  },
  methods: mapActions([
    'toggleSideNav'
  ])
}
</script>

<style>
$sidewidth: 180px;
.g-side{
  position: absolute;
  left:0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: $sidewidth;
  background-color: #fff;
  transition: left 450ms ease-out;
  .el-menu{
    background-color: transparent;
  }
  .el-submenu{
    border-bottom:1px solid #deeaf2;
    &.is-opened{
      .el-submenu__title{
        background:#f6f9fc;
      }
    }
    .el-menu-item{
      height: 40px;
      padding-left: 47px!important;
      border-bottom: none;
      font-size: 12px;
      line-height: 40px;
      color: #333;
    } 
    .el-menu{
      background:#f6f9fc;
    }
  } 
  .el-submenu__title{
    position: relative;
    padding-left: 47px!important;
    font-weight: bold;
    color: #333;
    font-size: 14px;
    border-bottom:none;
  }
  .el-submenu__icon-arrow{
    left: 30px;
    right: initial;
  }
  .el-menu-item{
    border-bottom: 1px solid #E7E7E7;
    position: relative;
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    [class^="el-icon-"]{
      font-size: 20px;
      vertical-align: middle;
      color: #CCC;
    }
    .u-text{
      display: block;
      vertical-align: middle;
    }
    &.is-active{
      &:before{
        content: "";
        position: absolute;
        z-index: 2;
        left: 40px;
        top: 15px;
        background: #88b247;
        width: 2px;
        height: 12px;
      }
    }
    &.is-active,
    &:hover{
      color:#88b247;
      font-weight: bold;
      [class^="el-icon-"]{
        color: inherit;
      }
    }
  }
  .el-icon-arrow-down:before{
    content: "\E603";
  }
  .el-submenu__title .el-submenu__icon-arrow{    
    transform: rotateZ(180deg);
  }
  .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow{
    transform: rotateZ(0deg);
  }
  .u-toggle {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: $sidewidth;
    margin-top: -30px;
    width: 10px;
    height: 60px;
    background-color: #c3c6cf;
    transition: left 450ms ease-out,background-color 300ms ease-out;
    &:hover {
      background-color: #a8a8a8;
    }
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      border-left: none;
      border-right: 4px solid #fff;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      color: transparent;
      width: 0;
      height: 0;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>
