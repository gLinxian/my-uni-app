<template>
  <view class="launchimg" :style="{ display: isShow }">
    <image class="img" :src="src" mode="aspectFill"></image>
    <view
      class="button"
      :style="positionMap[position]"
      @click="close">跳过</view>
  </view>
</template>

<script>
export default {
  name: 'MyLaunchImg',
  props: {
    src: {
      type: String,
      default: '/static/launch.jpg'
    },
    duration: {
      type: Number,
      default: 3000
    },
    position: {
      type: String,
      default: 'tr'
    }
  },
  data() {
    return {
      isShow: 'block',
      positionMap: {
        'tl': { top: '15px', left: '15px' },
        'tr': { top: '15px', right: '15px' },
        'bl': { bottom: '15px', left: '15px' },
        'br': { bottom: '15px', right: '15px' }
      }
    }
  },
  created() {
    setTimeout(() => {
      this.isShow = 'none'
    }, this.duration)
  },
  methods: {
    close() {
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
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0 0 10px rgba(0, 0, 0, .35);
  color: #333333;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  letter-spacing: 1.5px;
}
</style>
