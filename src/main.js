import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './router/intercept'
import store from './store'
import 'lib-flexible'
import FastClick from 'fastclick'
import {
  Button,
  Cell,
  Tabbar,
  TabItem,
  Spinner,
  Navbar,
  TabContainer,
  TabContainerItem,
  Loadmore,
  Switch,
  Popup,
  Field
} from 'mint-ui'
import VeGauge from 'v-charts/lib/gauge.common'
import VeLine from 'v-charts/lib/line.common'

import VueClipboard from 'vue-clipboard2'

import './styles/main.less'
// 复制
Vue.use(VueClipboard)

// mint-ui
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Spinner.name, Spinner)
Vue.component(Navbar.name, Navbar)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Switch.name, Switch)
Vue.component(Popup.name, Popup)
Vue.component(Field.name, Field)

// charts
Vue.component(VeGauge.name, VeGauge)
Vue.component(VeLine.name, VeLine)

FastClick.attach(document.body)

Vue.config.productionTip = false

window.myVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
