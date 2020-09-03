import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import './mixins/index.js'        // 全局混合
import './utils/config.js'        // 配置文件
import './utils/uni-api.js'       // 常用封装
import './utils/util.js'          // 工具函数
// #ifndef MP-WEIXIN
import './components/index.js'    // 全局组件（小程序不支持）
// #endif

// #ifdef MP-WEIXIN
import MyButton from './components/button/button.vue'
import MyModal from './components/modal/modal.vue'
import MyNavigationBar from './components/navigation-bar/navigation-bar.vue'
import MyNumberBox from './components/number-box/number-box.vue'
import MyPickern from './components/pickern/pickern.vue'
import MySearchBar from './components/search-bar/search-bar.vue'
import MySwitch from './components/switch/switch.vue'
import MyTabBar from './components/tab-bar/tab-bar.vue'
import MyWaterDrop from './components/water-drop/water-drop.vue'

Vue.component('my-button', MyButton)
Vue.component('my-modal', MyModal)
Vue.component('my-navigationBar', MyNavigationBar)
Vue.component('my-number-box', MyNumberBox)
Vue.component('my-pickern', MyPickern)
Vue.component('my-search-bar', MySearchBar)
Vue.component('my-switch', MySwitch)
Vue.component('my-tabBar', MyTabBar)
Vue.component('my-water-drop', MyWaterDrop)
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()
