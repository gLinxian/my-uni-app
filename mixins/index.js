import Vue from 'vue'

Vue.mixin({
	data() {
		return {
			navigationBar: {
				'padding-top': `${uni.getSystemInfoSync().statusBarHeight + 44}px`
			},
			tabBar: {
				'padding-bottom': '50px'
			},
			fullPage: {
				'min-height': `calc(100vh - ${uni.getSystemInfoSync().statusBarHeight + 44 + 50}px)`
			}
		}
	}
})
