<template>
  <header class="g-header">
    <a href="/" class="u-logo">
      <i class="logo"></i>
      <span class="txt">运营后台</span>
    </a>
    <div class="operation">
      <template v-if="user.type==99">
      <a class="accountlink" href="/manage/account"><i></i>帐号管理</a>
      <i class="gap">|</i>
      </template>
      <span class="u-user">Hi,{{user.nickname}}</span>
      <a class="logout" href="//www.kaola.com/logout.html?url=http%3A%2F%2Fwww.kaola.com%2F">退出</a>
      <span id="js-userinfobox" style="display: none;">{{user.nickname}}({{user.email}})</span>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'header-menu',
  computed: mapState([
    'user'
  ]),
  methods: {
    doFeedback () { // feedback水印脚本接入
      var script = document.createElement('script')
      var span = document.createElement('span')
      span.style.display = 'none'
      span.id = 'feedback-collect-tool'
      span.dataset.username = 'js-userinfobox'
      var src = '//feedback.kaola.com/dist/feedback.js'
      var today = new Date()
      var version = '?t=' + today.getMonth() + '-' + today.getDate()
      script.src = src + version
      document.body.appendChild(span)
      document.body.appendChild(script)
    }
  },
  created () {
    this.doFeedback()
  }
}
</script>

<style>
$height: 60px;
$lheight: 24px;
.g-header{
  height: $height;
  background:#22354a;
  color: #fff;
  display: flex;
  .u-logo{
    float: left;
    margin: 18px 30px;   
    .logo{
      display: inline-block;
      width: 100px;
      height: $lheight;
      background:url(../../assets/logo.png) no-repeat 0 0;
    }
    .txt{
      float: right;
      margin-left: 10px;
      height: $lheight;
      font-size: 18px;
      line-height: $lheight;
    }
    &:hover{
      text-decoration: none;
    }
  }

  .operation{
    float: right;
    margin:18px 30px;
    height: $lheight;
    line-height: $lheight;
    color: #eee;
    .gap{
      display: inline-block;
      margin: 0 5px;
      font-family: arial;
      color: #666;
    }
    .logout{
      display: inline-block;
      margin-left: 5px;
      color: #fff;
    }
  }
}
</style>
