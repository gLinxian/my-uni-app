<template>
  <scroll-view class="scroll-view" :scroll-y="true">
    <view class="item" v-for="item in 5" :key="item">
      <view class="item-header">
        <view class="flex align-center">
          <image class="w-px-20 h-px-20 mr-5 radius-2" src="/static/hupu-logo.png" mode="aspectFill" />
          <text>虎扑篮球新闻</text>
        </view>
        <text class="placeholder icon-close"></text>
      </view>
      <view class="item-title text-line-2">[流言板]詹姆斯戴维斯季后赛前七场场均25+10，历史首个二人组</view>
      <image class="item-img" src="/static/swiper1.jpg" mode="aspectFill"></image>
      <view class="item-tag"><text class="item-tag-primary"># 湿乎乎的话题</text></view>
      <view class="item-menu">
        <view class="item-menu-item">
          <text class="mr-5 icon-forward"></text>
          <text>分享</text>
        </view>
        <view class="item-menu-item">
          <text class="mr-5 icon-comment"></text>
          <text>评论</text>
        </view>
        <view class="item-menu-item">
          <text class="mr-5 icon-appreciate"></text>
          <text>推荐</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style lang="scss" scoped>
.scroll-view {
  width: 100%;
  height: 100%;
}

.item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 0 15px;
  background-color: $white;

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 14px;
  }

  &-title {
    margin-bottom: 10px;
  }

  &-img {
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
  }

  &-tag {
    margin-bottom: 10px;

    &-primary {
      padding: 2px 4px;
      background-color: #F3F4FE;
      color: #346EF6;
      font-size: 14px;
    }
  }

  &-menu {
    display: flex;
    padding: 10px 0;
    border-top: .5px solid #F5F5F5;
    font-size: 15px;

    &-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $general;
    }
  }
}
</style>
