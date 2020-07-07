import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import "./main.css";
import { iconsSet as icons } from './assets/icons/icons.js'
import { callApi } from "./api/apiUtility";
import { i18n } from "./plugins/i18n";
import VueCookies from "vue-cookies";
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "babel-polyfill";
import "@/../node_modules/slick-carousel/slick/slick.css";
import "@/../node_modules/slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope,faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  fab,
  faFacebookF,
  faInstagram,
  faLine
} from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope,faPhoneAlt);
library.add(fab, faFacebookF, faInstagram, faLine);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(VueCookies)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.prototype.$language = VueCookies.isKey("back_office_language") ? VueCookies.get("back_office_language") : 'th';
Vue.prototype.$callApi = callApi;
Vue.prototype.$baseUrl = "";
Vue.prototype.$formatDate = "DD MMM YYYY";
Vue.prototype.$formatDateTime = "DD MMM YYYY HH:mm";
Vue.prototype.$formatTime = "HH:mm";
Vue.prototype.$headers = {
  "API-KEY": "EC0mmErCeAp1KeY",
  "Content-Type": "application/json",
  culture: Vue.prototype.$language,
  token: VueCookies.isKey("back_office_token") ? `Bearer ${VueCookies.get('back_office_token')}` : "null"
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!VueCookies.get("back_office_token")) {
      next({
        path: "/login",
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  i18n,
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
