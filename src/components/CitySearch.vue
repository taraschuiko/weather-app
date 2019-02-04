<template>
  <div class="city-search">
    <input type="text" placeholder="Search..." v-model="newCity" @keyup.enter="loadWeather">
    <button @click="loadWeather">Search</button>
    <p class="error" v-if="this.$store.state.error">{{this.$store.state.error}}</p>
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
      if (this.newCity.trim().length != 0) {
        this.$store.dispatch("loadWeather", this.newCity);
        this.newCity = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.city-search {
  margin-top: 8px;
}

input,
button {
  font-size: 16px;
  padding: 2px 6px;
  border: 1px solid #ccc;
}

input {
  margin-right: 5px;
}

button {
  background: #fff;
  cursor: pointer;
}
</style>
