<template>
  <view class="navigationBar" :style="[statusBarHeight, backgroundColor, borderBottom]">
    <image v-if="bgImg" class="img" :src="bgImg" mode="aspectFill">
    <text v-if="back" class="back icon-back" @click="backClick"></text>
    <text v-if="title" class="title" :style="[titleColor]">{{ title }}</text>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'MyNavigationBar',
  props: {
    bgImg: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    },
    back: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    tlColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    statusBarHeight() {
      return { 'padding-top': `${uni.getSystemInfoSync().statusBarHeight}px` }
    },
    backgroundColor() {
      return { 'background-color': this.bgColor || '#FFFFFF' }
    },
    titleColor() {
      return { color: this.tlColor || '#000000' }
    },
    borderBottom() {
      const borderBottom = this.border
        ? { 'border-bottom': '.5px solid #C8C7CC' }
        : { 'border-bottom': 'none' }
      return borderBottom
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
