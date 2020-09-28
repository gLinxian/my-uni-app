<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar :bgColor="$config.lgTheme" title="模板" color="#FFFFFF" />
    <view class="container">
      <view
        v-for="(item, index) in list"
        :key="index"
        :style="{ 'animation-duration': `${(list.length - index) * animateStep}s` }"
        :class="isAnimate && 'ani-slideInDown'"
        class="item-container"
        hover-class="item-hover"
        @click="itemClick(item.en)"
        @animationend="handleAnimationend">
        <view class="item">
          <view class="item-decorate"></view>
          <view class="item-decorate"></view>
          <view class="item-decorate"></view>
          <view class="item-text">
            <text class="item-text_cn text-line-1 mb-10">{{ item.cn }}</text>
            <text class="item-text_en text-line-1">{{ item.en }}</text>
          </view>
          <text class="item-icon fs-40" :class="item.class"></text>
        </view>
      </view>
    </view>
    <my-tab-bar :midButton="true">
      <view class="image" @click="handleAnimate">
        <image class="w-100 h-100 circle" src="/static/templates.gif" mode="aspectFill"></image>
      </view>
    </my-tab-bar>
  </view>
</template>

<script>
import animate from '@/mixins/animate.js'
export default {
  mixins: [animate],
  data() {
    return {
      list: [
        { cn: 'App Store 卡片', en: 'app-store-card', class: 'icon-card' },
        { cn: '表单', en: 'form', class: 'icon-form' },
        { cn: '分类选择列表', en: 'sort-list', class: 'icon-sort-list' },
        { cn: '左右滑动列表', en: 'swiper-list', class: 'icon-swiper-list' },
        { cn: '瀑布流', en: 'waterfall', class: 'icon-waterfall' }
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
@import '~@/styles/tabBar.scss';

.item-container {
  width: 100%;
}

.item {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #FFCC66;
  
  &-decorate {
    background: rgba(255, 255, 255, .25);

    &:nth-child(1) {
      top: 50%;
      left: 50%;
      width: 100%;
      height: 110px;
      transform: rotate(20deg);
    }

    &:nth-child(2) {
      top: -40px;
      right: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    
    &:nth-child(3) {
      top: -40px;
      left: -40px;
      width: 80px;
      height: 80px;
      transform: rotate(20deg);
    }
  }
}

.image {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
</style>
