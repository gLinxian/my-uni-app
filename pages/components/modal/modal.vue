<template>
  <view class="doc-container">
    <view class="doc-intro">重写模态框，使其在 iOS 和 Android 能有统一的样式。</view>
  
    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDefault" size="mini" @click="handleClick">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">script</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1_1 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">组件用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnSuccess" size="mini" @click="handleClick">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">script</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2_2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">文档</view>
      <scroll-view class="table" :scroll-x="true">
        <view class="thead">
          <view class="tr">
            <view class="th">属性</view>
            <view class="th">说明</view>
          </view>
        </view>
        <view class="tbody">
          <view class="tr">
            <view class="td">isAnimate</view>
            <view class="td">是否使用动画效果</view>
          </view>
          <view class="tr">
            <view class="td">title</view>
            <view class="td">设置标题</view>
          </view>
          <view class="tr">
            <view class="td">content</view>
            <view class="td">设置内容</view>
          </view>
          <view class="tr">
            <view class="td">showCancel</view>
            <view class="td">是否显示取消按钮</view>
          </view>
          <view class="tr">
            <view class="td">cancelText</view>
            <view class="td">取消按钮文本</view>
          </view>
          <view class="tr">
            <view class="td">cancelColor</view>
            <view class="td">取消按钮颜色</view>
          </view>
          <view class="tr">
            <view class="td">confirmText</view>
            <view class="td">确定按钮文本</view>
          </view>
          <view class="tr">
            <view class="td">confirmColor</view>
            <view class="td">确定按钮颜色</view>
          </view>
        </view>
      </scroll-view>
    </view>

    <my-modal />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      title: '提示',
      content: '是否确定？',
      code1:
`<my-modal />`,
      code1_1:
`this.$uni.showMyModal({
  title: '提示',
  content: '是否确定？',
  success: res => {
    if (res.confirm) {
      // 点击确定
    }
    if (res.cancel) {
      // 点击取消
    }
  }
})`,
      code2:
`<my-modal
  v-show="showModal"
  title="提示" 
  content="是否确定？"
  @success="handleSuccess" />`,
      code2_2:
`data() {
  return {
    showModal: false
  }
},
methods: {
  handleSuccess(res) {
    if (res.confirm) {
      // 点击确定
    }
    if (res.cancel) {
      // 点击取消
    }
  }
}`
    }
  },
  methods: {
    handleClick() {
      setTimeout(() => {
        this.$uni.showMyModal({
          title: '提示',
          content: '是否确定？',
          success: res => {
            console.log(res)
          }
        })
      }, 150)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
