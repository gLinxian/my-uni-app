<template>
  <view class="my-container">
    <view class="my-row">
      <view class="my-title">基础</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="my-row">
      <view class="my-title">无偏移</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="my-row">
      <view class="my-title">单侧</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.1);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="my-row">
      <view class="my-title">邻边</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 5px 5px 5px -4px rgba(0, 0, 0, 0.1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 5px 5px 5px -4px rgba(0, 0, 0, 0.1);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="my-row">
      <view class="my-title">两侧</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 6px 0 5px -5px rgba(0, 0, 0, 0.1), -6px 0 5px -5px rgba(0, 0, 0, .1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 6px 0 5px -5px rgba(0, 0, 0, 0.1), -6px 0 5px -5px rgba(0, 0, 0, .1);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="my-row">
      <view class="my-title">1px</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);"></view>
      <view class="my-code">
        <text class="my-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="my-code-text" space="nbsp">{{ `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);` }}</text>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.my-row {
  box-shadow: none;
}
</style>
