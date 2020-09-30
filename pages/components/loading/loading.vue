<template>
  <view class="doc-container">
  
    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.default" size="mini" @click="handleClick(undefined, undefined, undefined)">尝 试</my-button>
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
      <view class="doc-title">更换图片</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.success" size="mini" @click="handleClick('/static/hupu-logo.png', '#C01E2F')">尝 试</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">更改标题</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.warning" size="mini" @click="handleClick(undefined, undefined, '请求中...')">尝 试</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
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
            <view class="td">src</view>
            <view class="td">图片路径</view>
          </view>
          <view class="tr">
            <view class="td">color</view>
            <view class="td">设置颜色</view>
          </view>
          <view class="tr">
            <view class="td">title</view>
            <view class="td">设置标题</view>
          </view>
          <view class="tr">
            <view class="td">mask</view>
            <view class="td">是否显示蒙层</view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <my-loading :src="src" :color="color" :title="title" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: '/static/uni-logo.png',
      color: '#2B9939',
      title: '加载中...',
      code1:
`<my-loading />`,
      code1_1:
`this.$uni.showMyLoading()
setTimeout(() => {
  this.$uni.hideMyLoading()
}, 3000)`,
      code2:
`<my-loading
  src="/static/hupu-logo.png"
  color="#C01E2F" />`,
      code3:
`<my-loading title="请求中..." />`
    }
  },
  methods: {
    handleClick(src = '/static/uni-logo.png', color = '#2B9939', title = '加载中...') {
      this.src = src
      this.color = color
      this.title = title
      setTimeout(() => {
        this.$uni.showMyLoading()
        setTimeout(() => {
          this.$uni.hideMyLoading()
        }, 3000)
      }, 150)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 400px;
}

/* 第一列宽度  */
.th:first-child,
.td:first-child {
  min-width: 110px;
}  
</style>
