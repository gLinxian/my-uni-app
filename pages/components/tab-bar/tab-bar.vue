<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDefault" size="mini" @click="handleClick(1)">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">启用中间按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnSuccess" size="mini" @click="handleClick(2)">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">自定义中间按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnWarning" size="mini" @click="handleClick(3)">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      code1: 
`<my-tab-bar />`,
      code2:
`// 默认是扫码功能
<my-tab-bar :midButton="true" />`,
      code3:
`<my-tab-bar :midButton="true" >
  <view class="image" @click="handleClick">
    <image
      class="w-100 h-100 circle"
      src="/static/templates.gif"
      mode="aspectFill"></image>
  </view>
</my-tab-bar>`
    }
  },
  methods: {
    handleClick(type) {
      this.$uni.navigateTo(`demonstrate?type=${type}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
