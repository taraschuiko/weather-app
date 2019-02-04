<template>
  <div class="weather">
    <p class="weather__temp" v-if="weather.temp">{{weather.temp}}°</p>
    <p class="weather__city">{{city}}</p>
    <p class="weather__main">{{weather.main}}</p>
    <p class="weather__wind-speed" v-if="weather.windSpeed">
      Wind speed: {{weather.windSpeed}}
      <span v-if="units === 'metric'">m/s</span>
      <span v-if="units === 'imperial'">mi/h</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Weather",
  computed: {
    city() {
      return this.$store.state.city;
    },
    units() {
      return this.$store.state.units;
    },
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>

<style lang="scss" scoped>
.weather {
  margin-top: 8px;

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
