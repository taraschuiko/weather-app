import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APP_ID = "appid=34260ce975aea61ded7b1014aecb5d54"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?${APP_ID}`

export default new Vuex.Store({
  state: {
    city: null,
    units: "metric",
    weather: {
      main: null,
      temp: null,
      windSpeed: null
    },
    error: ""
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
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    loadWeather(context, city) {
      if (city != null && city != "" && city != undefined) {
        fetch(BASE_URL + "&q=" + city + "&units=" + this.state.units)
          .then(r => r.json())
          .then(json => {
            if (json.name) {
              context.commit("setCity", json.name)
              context.commit("setError", "")
              context.commit("setWeather", {
                main: json.weather[0].main,
                temp: Math.round(json.main.temp),
                windSpeed: json.wind.speed
              })
            } else {
              context.commit("setError", city + " wasn't found");
            }
            return json;
          })
          .catch(json => {
            context.commit("setError", city + " wasn't found");
            context.commit("setCity", "")
            context.commit("setWeather", {
              main: null,
              temp: null,
              windSpeed: null
            })
          })
      }
    }
  }
})