import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDZSlMiGdjokydzmpWOvecpm1KBiDJ_TpI",
  authDomain: "vue-calendar-2a6e8.firebaseapp.com",
  databaseURL: "https://vue-calendar-2a6e8.firebaseio.com",
  projectId: "vue-calendar-2a6e8",
  storageBucket: "vue-calendar-2a6e8.appspot.com",
  messagingSenderId: "201890350204",
  appId: "1:201890350204:web:615aa235a930dfa8a575f9",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
