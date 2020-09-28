<template>
  <view class="navigationBar" :style="{
      'padding-top': paddingTop,
      'border-bottom': borderBottom,
      background: bgColor,
      opacity: opacity,
      color: color
    }">
    <image v-if="bgImg" class="img" :src="bgImg" mode="aspectFill"></image>
    <text v-if="back" class="back icon-back" @click="backClick"></text>
    <text v-if="title" class="title">{{ title }}</text>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'MyNavigationBar',
  props: {
    border: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#FFFFFF'
    },
    opacity: {
      type: Number,
      default: 1
    },
    bgImg: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    paddingTop() {
      return `${uni.getSystemInfoSync().statusBarHeight}px`
    },
    borderBottom() {
      return this.border ? '.5px solid #C8C7CC' : 'none'
    }
  },
  methods: {
    backClick() {
      this.$uni.navigateBack(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigationBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  .back {
    float: left;
    margin-left: 12px;
    font-size: 17px;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}
</style>
