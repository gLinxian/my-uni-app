<template>
  <view>
    <my-navigation-bar v-if="type === '1'" back title="自定义导航栏" />

    <my-navigation-bar v-if="type === '2'">
      <view class="navigation-bar">
        <view @click="backClick">
          <text class="icon-back"></text>
          <text>返回</text>
        </view>
        <text class="transform-horizontal" @click="textClick('你点击了标题')">标题</text>
        <text class="icon-question" @click="textClick('你点击了 icon-question')"></text>
      </view>
    </my-navigation-bar>

    <my-navigation-bar v-if="type === '3'" bgImg="/static/basic.jpg" back title="背景图片" color="#FFFFFF" />

    <my-navigation-bar v-if="type === '4'" :opacity="opacity" :bgColor="$config.lgTheme" back title="背景渐现" color="#FFFFFF" />
    <view v-if="type === '4'" :style="[navigationBar]" class="container">撑出新高度</view>
  </view>
</template>

<script>
import transparentTitle from '@/mixins/transparent-title.js'
export default {
  mixins: [transparentTitle],
  data() {
    return {
      type: ''
    }
  },
  onLoad(e) {
    this.type = e.type
  },
  methods: {
    backClick() {
      this.$uni.navigateBack(1)
    },
    textClick(str) {
      this.$uni.showToast(str)
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 12px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: $bgColor;
    color: $placeholder;
    font-size: 20px;
    letter-spacing: 10px;
    writing-mode: vertical-lr;
  }
</style>
