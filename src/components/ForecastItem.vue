<template>
  <div class="forecast-item">
    <p class="forecast-item__temp">{{forecast.temp}}°</p>
    <div class="forecast-item__info">
      <p>
        {{getDay(forecast.date)}} -
        {{forecast.date.getHours() != 23 ? forecast.date.getHours()+1 : "0"}}:00
      </p>
      <p>{{forecast.main}}</p>
      <p>
        Wind speed: {{forecast.windSpeed}}
        <span v-if="units === 'metric'">m/s</span>
        <span v-if="units === 'imperial'">mi/h</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForecastItem",
  props: {
    forecast: Object
  },
  computed: {
    units() {
      return this.$store.state.units;
    }
  },
  methods: {
    getDay(date) {
      switch (date.getDay()) {
        case 1:
          return "Today";
        case 2:
          return "Tomorrow";
        default:
          return date.getMonth() + 1 + "." + date.getDate();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forecast-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-bottom: 8px;

  &__temp {
    font-weight: 700;
    font-size: 36px;
    margin: 0;
  }

  &__info {
    margin-left: 6px;
  }
}
</style>
