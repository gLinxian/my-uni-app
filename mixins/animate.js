export default {
  data() {
    return {
      isAnimate: true,
      animateStep: 0.2,
      animateTimer: null
    }
  },

  methods: {
    handleAnimate() {
      if (this.isAnimate) {
        const text = {
          0: '上一次的动画还没结束\r\n请再等一会儿(๑• . •๑)',
          1: '你操作得太快啦\r\n∠( ᐛ 」∠)＿',
          2: '我是随机出来的\r\n( ‵▽′)ψ'
        }
        const random = Math.floor(Math.random() * 3 + 0)
        this.$uni.showToast(text[random], undefined, false)
      }
      this.isAnimate = true
    },

    handleAnimationend() {
      clearTimeout(this.animateTimer)
      this.animateTimer = setTimeout(() => {
        this.isAnimate = false
      }, this.list.length * this.animateStep * 1000)
    }
  }
}
