<template>
  <view :style="[tabBar]">
    <my-navigation-bar :border="false" bgColor="transparent">
      <text class="icon-home ml-15 white fs-20"></text>
    </my-navigation-bar>
    <my-navigation-bar title="基础" color="#FFFFFF" :border="false" :bgColor="lgTheme" :opacity="opacity" />
    <view :style="[fullPage]">
      <image class="w-100" src="/static/basic.jpg" mode="aspectFill"></image>
      <view class="my-page">
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[
            'ani-slideInDown',
            `ani-delay-${list.length - index}`
          ]"
          class="item-container"
          hover-class="item-hover"
          @click="itemClick(item.en)">
          <view class="item">
            <view class="item-decorate"></view>
            <view class="item-decorate"></view>
            <view class="item-text">
              <text class="item-text_cn">{{ item.cn }}</text>
              <text>{{ item.en }}</text>
            </view>
            <text class="item-icon" :class="item.class"></text>
          </view>
        </view>
      </view>
    </view>
    <my-tab-bar :midButton="true" />
  </view>
</template>

<script>
import transparentTitle from '@/mixins/transparent-title.js'
export default {
  mixins: [transparentTitle],
  data() {
    return {
      list: [
        { cn: '颜色', en: 'color',       class: 'icon-skin' },
        { cn: '组合', en: 'composition', class: 'icon-group' },
        { cn: '栅格', en: 'grid',        class: 'icon-cascades' },
        { cn: '图标', en: 'icon',        class: 'icon-emoji' },
        { cn: '阴影', en: 'shadow',      class: 'icon-flashlightopen' },
        { cn: '工具', en: 'utils',       class: 'icon-repair' }
      ]
    }
  },
  methods: {
    itemClick(url) {
      this.$uni.navigateTo(`./${url}/${url}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-page {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 7.5px;
}
.item-container {
  box-sizing: border-box;
  width: 50%;
  padding: 0 7.5px;
  transition: opacity .3s;
}
.item {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: $theme;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, .5);
  overflow: hidden;
  color: $white;
  &-text {
    display: flex;
    flex-direction: column;
    &_cn {
      margin-bottom: 5px;
      font-size: 20px;
    }
  }
  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
  }
  &-decorate {
    position: absolute;
    background: rgba(255, 255, 255, .1);
    &:nth-child(1) {
      top: -50px;
      left: -50px;
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }
    &:nth-child(2) {
      right: 25%;
      bottom: -10%;
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
  &-hover {
    opacity: .8;
  }
}
.ani-slideInDown {
  animation-name: slideInDown;
  @keyframes slideInDown {
    from {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
