<template>
  <div id="app" class="g-doc">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
