import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import './mixins/index.js'        // 全局混合
import './utils/config.js'        // 配置文件
import './utils/uni-api.js'       // 常用封装
import './utils/util.js'          // 工具函数

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
	store
})
app.$mount()
