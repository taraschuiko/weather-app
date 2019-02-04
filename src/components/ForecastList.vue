<template>
  <div>
    <ForecastItem v-for="(item, index) in this.$store.state.forecast" :key="index" :forecast="item"></ForecastItem>
  </div>
</template>

<script>
import ForecastItem from "./ForecastItem";

export default {
  name: "ForecastList",
  components: { ForecastItem }
};
</script>