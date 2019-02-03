<template>
  <div>
    <input type="text" placeholder="Search..." v-model="newCity" @keyup.enter="loadWeather">
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
      this.newCity =
        this.newCity.charAt(0).toUpperCase() + this.newCity.slice(1);
      this.$store.dispatch("loadWeather", this.newCity);
      this.newCity = "";
    }
  }
};
</script>
