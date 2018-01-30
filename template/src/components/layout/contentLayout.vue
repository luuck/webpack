<template>
  <div :class="'g-main f-cb ' + outclazz">
    <div :class="'g-content '+clazz">
      <header class="g-tltbox">
        <h2 class="u-title">
          <slot name="title"></slot>
        </h2>
      </header>
      <div class="g-tabbox">
        <slot name="tabs"></slot>
      </div>
      <div class="g-listbox">
        <slot name="list"></slot>
      </div>
      <div class="g-viewbox">
        <slot name="view"></slot>
      </div>
    </div>
    <div class="g-rtside">
      <slot name="rtside"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content-layout',
    props: {
      clazz: {
        type: String,
        default: function () {
          return ''
        }
      },
      outclazz: {
        type: String,
        default: function () {
          return ''
        }
      }
    }
  }
</script>

<style>
  .g-tabbox{
    margin:15px 0;
  }
  .g-listbox{
    margin-bottom: 20px;
  }
  .u-title{
    position: relative;
    padding-left: 10px;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    &:before{
      content:'';
      position: absolute;
      top:3px;
      left: 0;
      width: 3px;
      height: 16px;
      background: #333;
    }
  }
</style>
