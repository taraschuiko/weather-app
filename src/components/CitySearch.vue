<template>
  <div>
    <input type="text" placeholder="Search..." v-model="newCity">
    <button @click="loadWeather">Get Weather</button>
  </div>
</template>

<script>
export default {
  name: "CitySearch",
  data() {
    return {
      newCity: ""
    };
  },
  methods: {
    loadWeather() {
      this.$store.dispatch("loadWeather", this.newCity);
      this.newCity = "";
    }
  }
};
</script>
