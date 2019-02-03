import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APP_ID = "appid=34260ce975aea61ded7b1014aecb5d54"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?${APP_ID}`

export default new Vuex.Store({
  state: {
    city: "",
    units: "metric",
    weather: {
      main: "",
      temp: null,
      windSpeed: null
    }
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
      localStorage.city = city;
    },
    setUnits(state, units) {
      state.units = units;
    },
    setWeather(state, weather) {
      state.weather = weather;
    }
  },
  actions: {
    loadWeather(context, city) {
      context.commit("setCity", city);
      let weather = {};
      fetch(BASE_URL + "&q=" + this.state.city + "&units=" + this.state.units)
        .then(r => r.json())
        .then(json => weather = {
          main: json.weather[0].main,
          temp: Math.round(json.main.temp),
          windSpeed: json.wind.speed
        })
        .then(() => context.commit("setWeather", weather))
    }
  }
})