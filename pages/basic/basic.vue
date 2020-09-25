<template>
  <view :style="[tabBar]">

    <my-navigation-bar :border="false" :bgColor="'transparent'" title="基础" color="#FFFFFF">
      <text class="icon-basic" @click="iconClick"></text>
    </my-navigation-bar>
    <my-navigation-bar v-if="opacity" :border="false" :bgColor="lgTheme" :opacity="opacity" title="基础" color="#FFFFFF" />

    <view :style="[fullPage]">
      <!-- 页面内容写在这 -->
      <image class="w-100" src="/static/basic.jpg" mode="aspectFill"></image>

      <view class="container">
        <view
          v-for="(item, index) in list"
          :key="index"
          :style="{ 'animation-duration': `${(list.length - index) * 0.2}s`}"
          :class="isAnimate && 'ani-slideInDown'"
          class="item-container"
          hover-class="item-hover"
          @click="itemClick(item.en)"
          @animationend="itemAnimationend">
          <view class="item">
            <view class="item-decorate"></view>
            <view class="item-decorate"></view>
            <view class="item-text">
              <text class="item-text_cn">{{ item.cn }}</text>
              <text class="item-text_en">{{ item.en }}</text>
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
        { cn: '颜色', en: 'color', class: 'icon-skin' },
        { cn: '组合', en: 'composition', class: 'icon-group' },
        { cn: '栅格', en: 'grid', class: 'icon-cascades' },
        { cn: '图标', en: 'icon', class: 'icon-emoji' },
        { cn: '阴影', en: 'shadow', class: 'icon-flashlightopen' },
        { cn: '工具', en: 'utils', class: 'icon-repair' }
      ],
      isAnimate: true,
      animateTimer: null
    }
  },
  methods: {
    iconClick() {
      this.isAnimate = true
    },
    itemClick(url) {
      this.$uni.navigateTo(`./${url}/${url}`)
    },
    itemAnimationend() {
      clearTimeout(this.animateTimer)
      this.animateTimer = setTimeout(() => {
        this.isAnimate = false
      }, this.list.length * 0.2 * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
/* 注意引入 scss 和 引入 css 的方式不一样 */
@import '~@/styles/tabBar.scss';

.icon-basic {
  margin-left: 15px;
  // padding: 5px;
  // border-radius: 50%;
  // background: rgba($color: $theme, $alpha: .5);
  color: $white;
  font-size: 20px;
  // line-height: 1;
}

.item { 
  background-color: $theme; 

  &-decorate {

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
}
</style>
