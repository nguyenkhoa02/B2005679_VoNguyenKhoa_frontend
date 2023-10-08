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
    <AppHeader class="container"/>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 600px;
  margin: auto;
}
*::before{
  font-weight: unset;
}
#app {
  display: unset;
}
</style>