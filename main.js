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
// import Vue from 'vue'
// import MyButton from './button/button.vue'
// import MyModal from './modal/modal.vue'
// import MyNavigationBar from './navigation-bar/navigation-bar.vue'
// import MyPickern from './pickern/pickern.vue'
// import MySwitch from './switch/switch.vue'
// import MyTabBar from './tab-bar/tab-bar.vue'
// Vue.component('my-button', MyButton)
// Vue.component('my-modal', MyModal)
// Vue.component('my-navigationBar', MyNavigationBar)
// Vue.component('my-pickern', MyPickern)
// Vue.component('my-switch', MySwitch)
// Vue.component('my-tabBar', MyTabBar)
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()
