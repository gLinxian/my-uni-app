<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar :bgColor="$config.lgTheme" title="组件" color="#FFFFFF" />
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
          <view class="item-text">
            <text class="item-text_cn text-line-1">{{ item.cn }}</text>
            <text class="item-text_en text-line-1">{{ item.en }}</text>
          </view>
          <text class="item-icon" :class="item.class"></text>
        </view>
      </view>
    </view>
    <my-tab-bar :midButton="true">
      <view class="image" hover-class="image-hover" @click="handleAnimate">
        <image class="w-100 h-100 circle" src="/static/components.jpg" mode="aspectFill"></image>
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
        { cn: '环形进度条', en: 'annular-progress', class: 'icon-annular-progress' },
        { cn: '按钮', en: 'button', class: 'icon-button' },
        { cn: '启动图', en: 'launch-img', class: 'icon-launch-img' },
        { cn: '加载中', en: 'loading', class: 'icon-loading' },
        { cn: '模态框', en: 'modal', class: 'icon-modal' },
        { cn: '自定义导航栏', en: 'navigation-bar', class: 'icon-nav' },
        { cn: '计数器', en: 'number-box', class: 'icon-number-box' },
        { cn: '选择器', en: 'picker', class: 'icon-picker' },
        { cn: '搜索框', en: 'search-bar', class: 'icon-search' },
        { cn: '骨架屏', en: 'skeleton', class: 'icon-skeleton' },
        { cn: '开关按钮', en: 'switch', class: 'icon-switch' },
        { cn: '底部选项栏', en: 'tab-bar', class: 'icon-tabBar' },
        { cn: '顶部选项栏', en: 'tabs', class: 'icon-tabs' },
        { cn: '上传图片', en: 'upload-img', class: 'icon-upload-img' },
        { cn: '水滴', en: 'water-drop', class: 'icon-water-drop' }
      ],
      animateStep: 0.1
    }
  },

  onShareAppMessage() {
    
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

.item {
  background-color: #DFA3D6;

  &-decorate {

    &:nth-child(1) {
      bottom: -40px;
      left: -40px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    
    &:nth-child(2) {
      top: -25px;
      right: 25%;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}

.image {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba($color: #DFA3D6, $alpha: .5);
  transition: all .3s;

  &-hover {
    margin-top: 2px;
    box-shadow: none;
  }
}
</style>
