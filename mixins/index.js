/**
 * 全局 mixin 文件
 * 它让你可以在任何页面使用自定义导航栏和底部选项栏
 * 
 * <template>
 *   <view :style="[navigationBar, tabBar]">
 *     <my-navigationBar title="my-uni-app" />
 *     <view :style="[fullPage]">
 *       <!-- 页面内容写在这里 -->
 *       
 *     </view>
 *     <my-tabBar />
 *   </view>
 * </template>
 * 
 * @author linxian
 */

import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      navigationBar: {
        'padding-top': `${uni.getSystemInfoSync().statusBarHeight + 44}px`
      },
      lgTheme: this.$config.lgTheme,
      tabBar: {
        'padding-bottom': '50px'
      },
      fullPage: {
        'min-height': `calc(100vh - ${uni.getSystemInfoSync().statusBarHeight + 44 + 50}px)`
      },
			fullPageNoNav: {
				'min-height': `calc(100vh - ${uni.getSystemInfoSync().statusBarHeight + 50}px)`
			},
			fullPageNoTab: {
				'min-height': `calc(100vh - ${uni.getSystemInfoSync().statusBarHeight + 44}px)`
			}
    }
  }
})
