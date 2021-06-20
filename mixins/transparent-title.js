/**
 * 若想使用渐隐渐显的导航栏，需要引入这个 mixin
 * 
 * (部分代码省略)
 * 
 * <my-navigationBar title="my-uni-app" bgColor="#0000FF" :opacity="opacity" />
 * 
 * import transparentTitle from '@/mixins/transparent-title.js'
 * 
 * mixins: [transparentTitle]
 * 
 * @author linxian
 */

export default {
  data() {
    return {
      opacity: 0,
      navigationBarHeight: uni.getSystemInfoSync().statusBarHeight + 45
    }
  },

  onPageScroll(e) {
    this.opacity = e.scrollTop < this.navigationBarHeight
      ? Number((e.scrollTop / this.navigationBarHeight).toFixed(1))
      : 1
  }
}
