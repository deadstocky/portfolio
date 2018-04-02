import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import { store } from './store'

Vue.use(Vuetify, { theme: {
  primary: '#1B75BB',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCun4HQCYoxbO68qfxQSCBZ9AhuVp8zARk',
      authDomain: 'donovan-hong.firebaseapp.com',
      databaseURL: 'https://donovan-hong.firebaseio.com',
      projectId: 'donovan-hong',
      storageBucket: 'donovan-hong.appspot.com',
      messagingSenderId: '289532784832'
    })
  }
})
