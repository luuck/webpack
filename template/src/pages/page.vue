<template>
  <div id="main">
    <header-menu></header-menu>
    <div class="g-body" :class="{noHasSideNav: noHasSideNav}">
      <side-nav></side-nav>
      <router-view></router-view>
      <span class="u-totop" @click="goToTop">Top</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import HeaderMenu from 'components/layout/headerMenu'
  import SideNav from 'components/layout/sideNav'
  export default {
    name: 'main-page',
    computed: mapState([
      'noHasSideNav'
    ]),
    components: {
      HeaderMenu,
      SideNav
    },
    created () {
      this.$store.dispatch('getUserInfo')
    },
    methods: {
      goToTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
<style>
</style>
