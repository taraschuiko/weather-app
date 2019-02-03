<template>
  <div id="app">
    <h1>Weather Vue.js App</h1>
    <CitySearch></CitySearch>
    <Weather></Weather>
    <UnitsChange></UnitsChange>
  </div>
</template>

<script>
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";
import UnitsChange from "./components/UnitsChange";

export default {
  name: "app",
  components: {
    CitySearch,
    Weather,
    UnitsChange
  },
  mounted() {
    if (localStorage.city.length != 0) {
      this.$store.dispatch("loadWeather", localStorage.city);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
