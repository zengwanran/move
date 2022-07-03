import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Icon,
  Grid,
  GridItem,
  Search,
  NavBar,
} from 'vant';


// 全局注册

//import VueCropper from 'vue-cropper'

import 'amfe-flexible'
Vue.config.productionTip = false
//Vue.use(VueCropper)
import Element from 'element-ui'
import {
  VueCropper
} from 'vue-cropper';

Vue.component('VueCropper', VueCropper);
Vue.use(Element)
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Search);
Vue.use(NavBar);
// Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
