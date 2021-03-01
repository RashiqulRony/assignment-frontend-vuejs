import Vue          from 'vue'
import axios        from 'axios';
import router       from './routes/index';
import Api          from './routes/api';
import App          from './App.vue'
import globalHelper from '@/globalHelper';


export const eventBus = new Vue();
window.axios = axios;
window.eventBus = eventBus;

Vue.prototype.Api = Api;
Vue.prototype.ImageURL = process.env.VUE_APP_API_URL+'/image/';

Vue.use({
  install() {
    Vue.globalHelper = globalHelper;
    Vue.prototype.$globalHelper = globalHelper;
  }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
