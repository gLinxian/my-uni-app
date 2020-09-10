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
import MyAnnularProgress from './components/annular-progress/annular-progress.vue'
import MyButton from './components/button/button.vue'
import MyLaunchImg from './components/launch-img/launch-img.vue'
import MyLoading from './components/loading/loading.vue'
import MyModal from './components/modal/modal.vue'
import MyNavigationBar from './components/navigation-bar/navigation-bar.vue'
import MyNumberBox from './components/number-box/number-box.vue'
import MyPicker from './components/picker/picker.vue'
import MyUniPicker from './components/picker/uni-picker.vue'
import MySearchBar from './components/search-bar/search-bar.vue'
import MySkeleton from './components/skeleton/skeleton.vue'
import MySwitch from './components/switch/switch.vue'
import MyTabBar from './components/tab-bar/tab-bar.vue'
import MyTabs from './components/tabs/tabs.vue'
import MyUploadImg from './components/upload-img/upload-img.vue'
import MyWaterDrop from './components/water-drop/water-drop.vue'

Vue.component('my-annular-progress', MyAnnularProgress)
Vue.component('my-button', MyButton)
Vue.component('my-launch-img', MyLaunchImg)
Vue.component('my-loading', MyLoading)
Vue.component('my-modal', MyModal)
Vue.component('my-navigationBar', MyNavigationBar)
Vue.component('my-number-box', MyNumberBox)
Vue.component('my-picker', MyPicker)
Vue.component('my-uni-picker', MyUniPicker)
Vue.component('my-search-bar', MySearchBar)
Vue.component('my-skeleton', MySkeleton)
Vue.component('my-switch', MySwitch)
Vue.component('my-tabBar', MyTabBar)
Vue.component('my-tabs', MyTabs)
Vue.component('my-upload-img', MyUploadImg)
Vue.component('my-water-drop', MyWaterDrop)
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()
