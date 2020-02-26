<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";
#app {
  text-align: center;
  background-color: #e7e7e7;
  color: #1D1D1F;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100vh;
  width: 100vw;
}
</style>