<template>
  <div class="weather">
    <p class="weather__temp" v-if="weather.temp">{{weather.temp}}°</p>
    <p class="weather__city">{{city}}</p>
    <p class="weather__main">{{weather.main}}</p>
    <p class="weather__wind-speed" v-if="weather.windSpeed">Wind speed: {{weather.windSpeed}}</p>
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

<style lang="scss" scoped>
.weather {
  margin-top: 12px;

  p {
    margin: 0;
  }

  &__temp {
    font-size: 64px;
    font-weight: 700;
    line-height: 60px;
  }

  &__city {
    font-style: 24px;
    font-weight: 600;
  }
}
</style>
