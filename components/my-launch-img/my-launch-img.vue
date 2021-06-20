<template>
  <view class="launchimg" :style="{ display: isShow }">
    <image class="img" :src="src" mode="aspectFill"></image>
    <view
      class="button"
      :style="{
        top: top,
        right: right,
        bottom: bottom,
        left: left
      }"
      @click="close">{{ second }}{{ text }}</view>
  </view>
</template>

<script>
export default {
  name: 'MyLaunchImg',
  props: {
    duration: {
      type: Number,
      default: 3000
    },

    position: {
      type: String,
      default: 'tr'
    },

    src: {
      type: String,
      default: '/static/launch1.jpg'
    },

    text: {
      type: String,
      default: '跳过'
    }
  },

  data() {
    return {
      isShow: 'none',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      second: '',
      timer: null
    }
  },

  watch: {
    position: {
      handler(val) {
        if (val === 'tl') {
          this.top = '25px'
          this.right = 'auto'
          this.bottom = 'auto'
          this.left = '25px'
        }
        
        if (val === 'tr') {
          this.top = '25px'
          this.right = '25px'
          this.bottom = 'auto'
          this.left = 'auto'
        }
        
        if (val === 'bl') {
          this.top = 'auto'
          this.right = 'auto'
          this.bottom = '25px'
          this.left = '25px'
        }
        
        if (val === 'br') {
          this.top = 'auto'
          this.right = '25px'
          this.bottom = '25px'
          this.left = 'auto'
        }
      },
      immediate: true
    }
  },

  methods: {
    countDown() {
      let second = this.duration / 1000
      this.second = `${second}`
      this.timer = setInterval(() => {
        this.second = `${--second}`
        if (second === 0) {
          clearInterval(this.timer)
          this.isShow = 'none'
        }
      }, 1000)
    },

    open() {
      this.countDown()
      this.isShow = 'block'
    },

    close() { 
      this.timer && clearInterval(this.timer)
      this.isShow = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.launchimg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button {
  position: absolute;
  box-sizing: border-box;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, .5);
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  letter-spacing: 1.5px;
}
</style>
