<style lang="scss">
.main-page{
  height: 100%;
  display: flex;
}
</style>
<template>
<div class="main-page">
  <div class="left-menu">
    <ul>
      <li></li>
    </ul>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
  },
  data () {
      return {
	  }
  },
  methods: {
  }
}
</script>
