<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  }
};
</script>

<template>
  <div id="app">
    <AppHeader class="container-fluid"/>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>