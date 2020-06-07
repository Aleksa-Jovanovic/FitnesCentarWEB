import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";
import VModal from "vue-js-modal";
import jsPDF from "jspdf";

Vue.use(VModal);
Vue.use(jsPDF);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
