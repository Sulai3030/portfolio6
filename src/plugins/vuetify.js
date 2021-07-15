// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#022670",
    secondary: "#174EBD",
    accent: "#50700D",
    error: "#b71c1c",
  },
});

const opts = {};

export default new Vuetify(opts);
