import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import MyButton from './components/button/button.vue'
import MyModal from './components/modal/modal.vue'
import MyNavigationBar from './components/navigation-bar/navigation-bar.vue'
import MyPicker from './components/picker/picker.vue'
import MyTabBar from './components/tab-bar/tab-bar.vue'
import './utils/util.js'       // 工具函数
import './utils/config.js'     // 配置文件
import './utils/uni-api.js'    // 常用封装
import './mixins/index.js'     // 全局混合
// import './components/index.js' // 全局组件

Vue.config.productionTip = false
Vue.component('my-button', MyButton)
Vue.component('my-modal', MyModal)
Vue.component('my-navigationBar', MyNavigationBar)
Vue.component('my-picker', MyPicker)
Vue.component('my-tabBar', MyTabBar)

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()
