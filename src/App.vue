<template>
  <div id="app">
    <div class="app-top">
      <img src="./assets/cloud.png" alt="Logo" class="app-top__logo">
      <h1>Weather Vue.js App</h1>
      <CitySearch></CitySearch>
      <Weather></Weather>
      <UnitsChange></UnitsChange>
    </div>
    <ForecastList></ForecastList>
  </div>
</template>

<script>
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";
import UnitsChange from "./components/UnitsChange";
import ForecastList from "./components/ForecastList";

export default {
  name: "app",
  components: {
    CitySearch,
    Weather,
    UnitsChange,
    ForecastList
  },
  beforeMount() {
    if (localStorage.units.length != 0) {
      this.$store.commit("setUnits", localStorage.units);
    }
    if (localStorage.city.length != 0) {
      this.$store.dispatch("loadWeather", localStorage.city);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 8px;
  max-width: 420px;
  margin: 0 auto;
}

.app-top {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;

  &__logo {
    max-width: 25%;
  }
}
</style>
