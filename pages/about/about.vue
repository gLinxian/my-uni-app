<template>
  <view :style="[tabBar]" class="bg-bgColor">
    <my-navigation-bar :border="false" :bgColor="lgTheme" :opacity="opacity" title="关于" color="#FFFFFF" />
    <view :style="[fullPageNoNav]">
      <view class="header">
        <view class="avatar">
          <image class="avatar-img" src="/static/default.jpg" mode="aspectFill"></image>
        </view>
        <text>登录 / 注册</text>
      </view>
      <view class="p-15">
        <view class="list">
          <view class="item">
            <text class="item-icon icon-myfill"></text>
            <view class="item-body">
              <text>关于</text>
              <text class="icon-right"></text>
            </view>
          </view>
          <view class="item">
            <text class="item-icon icon-text"></text>
            <view class="item-body">
              <text>日志</text>
              <text class="icon-right"></text>
            </view>
          </view>
          <view class="item">
            <text class="item-icon icon-commentfill"></text>
            <view class="item-body border-bottom-none">
              <text>反馈</text>
              <text class="icon-right"></text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <my-tab-bar/>
  </view>
</template>

<script>
import transparentTitle from '@/mixins/transparent-title.js'
export default {
  mixins: [transparentTitle]
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 240px;
  background: linear-gradient(to bottom, #687CD5, #DFA3D6);
  color: $white;
}

.avatar {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  padding: 2px;
  border: 1px solid $white;
  border-radius: 50%;
  &-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.list {
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
}

.item {
  display: flex;
  align-items: center;
  font-size: 18px;
  &-icon {
    margin: 0 15px;
    padding: 6px;
    border-radius: 50%;
    background-color: #FEFAE1;
    color: #F1C643;
    line-height: 1;
  }
  &-body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 0;
    border-bottom: .5px solid #F5F5F5;
    color: $placeholder;
  }
}
</style>
