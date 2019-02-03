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
      if (this.newCity.trim().length != 0) {
        this.newCity =
          this.newCity.charAt(0).toUpperCase() + this.newCity.slice(1);
        this.$store.dispatch("loadWeather", this.newCity);
        this.newCity = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input,
button {
  font-size: 16px;
  padding: 2px 6px;
  border: 1px solid #ccc;
  cursor: pointer;
}

input {
  margin-right: 5px;
}

button {
  background: transparent;
}
</style>
