// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./login/HelloWorld";
import App from "./login/App";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});

/* eslint-disable no-new */
/* eslint-disable no-new */
window.jnyd = {};
window.apiready = function() {
  new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });
};
