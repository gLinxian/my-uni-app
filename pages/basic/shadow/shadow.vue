<template>
  <view class="doc-container">
    <view class="doc-row">
      <view class="doc-title">基础</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">无偏移</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 0 6px rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 0 0 6px rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">单侧</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 6px 5px -5px rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 0 6px 5px -5px rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">邻边</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 5px 5px 5px -4px rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 5px 5px 5px -4px rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">两侧</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 6px 0 5px -5px rgba(0, 0, 0, .5), -6px 0 5px -5px rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 6px 0 5px -5px rgba(0, 0, 0, .5), -6px 0 5px -5px rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">1px</view>
      <view class="w-100 h-px-100 mb-15 bg-light-default" style="box-shadow: 0 0 0 1px rgba(0, 0, 0, .5);"></view>
      <view class="doc-code">
        <text class="doc-code-type">css</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ `box-shadow: 0 0 0 1px rgba(0, 0, 0, .5);` }}</text>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

.doc-row {
  box-shadow: none;
}
</style>
