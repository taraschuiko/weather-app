<template>
  <div>
    <h1>{{weather.temp}}</h1>
    <h2>{{city}}</h2>
    <h3>{{weather.main}}</h3>
    <h4 v-if="weather.windSpeed">Wind speed: {{weather.windSpeed}}</h4>
  </div>
</template>

<script>
export default {
  name: "Weather",
  computed: {
    city() {
      return this.$store.state.city;
    },
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>
