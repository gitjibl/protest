import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/js/sso-login'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueCookies from 'vue-cookies'
import VueLoading from 'vue-loading-template'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';

Vue.prototype.$layer = layer(Vue);
Vue.use(VueLoading, /** options **/)
Vue.use(VueCookies)
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000
});
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
