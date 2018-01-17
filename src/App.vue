<template>
  <div id="app">
    <t-header></t-header>
    <div class="content">
      <!-- <div id="about" v-on:click="about">about</div> -->
        <router-view></router-view>
    </div>
  </div>
</template>
<script>

import THeader from '@/common-components/THeader'

export default {
  name: 'app',
  components: {
    THeader
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>

<!-- <style lang="scss" src="../static/scss/style.scss"></style> -->
