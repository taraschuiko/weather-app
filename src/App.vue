<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100px">
    <h1>Weather Vue.js App</h1>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CitySearch from "./components/CitySearch";

export default {
  name: "app",
  components: {
    CitySearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
