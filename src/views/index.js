// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./index/HelloWorld";
import App from "./index/App";

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
window.jnyd = {};
/* eslint-disable no-new */
window.apiready = function() {
  new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });
};
