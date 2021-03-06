import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;
// export const bus = new Vue();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
