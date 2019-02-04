<template>
  <div class="units-change">
    <button @click="setUnits('metric')" :class="{active: this.$store.state.units == 'metric'}">C°</button>
    <button
      @click="setUnits('imperial')"
      :class="{active: this.$store.state.units == 'imperial'}"
    >F°</button>
  </div>
</template>

<script>
export default {
  name: "UnitsChange",
  methods: {
    setUnits(units) {
      this.$store.commit("setUnits", units);
      this.$store.dispatch("loadWeather", this.$store.state.city);
    }
  }
};
</script>

<style lang="scss" scoped>
.units-change {
  button {
    background: #ccc;
    border: 1px solid #ccc;
    border-radius: 0;
    font-size: 14px;
    padding: 2px 6px;
    outline: 0;
    cursor: pointer;
  }

  button.active {
    background: #fff;
    cursor: default;
  }
}
</style>
