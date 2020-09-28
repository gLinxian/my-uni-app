<template>
  <view :style="[navigationBar]">
    <my-navigation-bar :bgColor="$config.lgTheme" back title="日志" color="#FFFFFF" />
    <view :style="[fullPageNoTab]" class="border-box p-30">
      <view class="item" v-for="(item, index) in list" :key="index">
        <view class="item-dot">
          <view class="item-dot-inner">
            <view class="item-dot-inner-inner"></view>
          </view>
        </view>
        <view class="item-content">
          <view class="item-content-triangle"></view>
          <view class="item-content-time">{{ item.time }}</view>
          <view class="item-content-text">
            <!-- text 标签里换行符才生效 -->
            <text>{{ item.text }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { text: 'v1.0.0 \n 发布上线', time: '2020/09/28' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding: 0 0 30px 30px;
  border-left: 1px solid $border;
  &-dot {
    position: absolute;
    top: 0;
    left: -15px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    background-color: $white;
    &-inner {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 6px;
      border-radius: 50%;
      background-color: $theme;
      &-inner {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: $white;
      }
    }
  }
  &-content {
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 4px;
    background-color: $theme;
    box-shadow: 1px 1px 6px rgba($color: #000000, $alpha: .2);
    &-triangle {
      position: absolute;
      top: 10px;
      left: -5px;
      width: 10px;
      height: 10px;
      background-color: $theme;
      transform: rotate(45deg);
    }
    &-time {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 2px 5px;
      border-radius: 2px;
      background-color: $white;
      color: $theme;
      font-size: 12px;
    }
    &-text {
      color: $white;
      line-height: 1.8;
    }
  }
}
</style>
