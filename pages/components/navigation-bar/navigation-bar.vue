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
      <view class="doc-title">slot</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnSuccess" size="mini" @click="handleClick(2)">演 示</my-button>
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
      <view class="doc-code">
        <text class="doc-code-type">style</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2_3 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">背景图片</view>
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
  
    <view class="doc-row">
      <view class="doc-title">背景渐现</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDanger" size="mini" @click="handleClick(4)">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code4 }}</text>
        </scroll-view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">script</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code4_4 }}</text>
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
            <view class="td">border</view>
            <view class="td">是否显示边框</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">设置背景颜色</view>
          </view>
          <view class="tr">
            <view class="td">bgImg</view>
            <view class="td">设置背景图片</view>
          </view>
          <view class="tr">
            <view class="td">opacity</view>
            <view class="td">设置背景渐现关键属性</view>
          </view>
          <view class="tr">
            <view class="td">back</view>
            <view class="td">是否显示返回按钮</view>
          </view>
          <view class="tr">
            <view class="td">title</view>
            <view class="td">设置标题</view>
          </view>
          <view class="tr">
            <view class="td">color</view>
            <view class="td">设置文本颜色</view>
          </view>
        </view>
      </scroll-view>
    </view>
    
  </view>
</template>

<script>
export default {
  data() {
    return {
      code1:
`// 基础用法
<my-navigation-bar title="自定义导航栏" />

// 带返回按钮
<my-navigation-bar back title="自定义导航栏" />`,
      code2:
`<my-navigation-bar>
  <view class="navigation-bar">
    <view @click="backClick">
      <text class="icon-back"></text>
      <text>返回</text>
    </view>
    <text class="transform-horizontal" @click="textClick('你点击了标题')">标题</text>
    <text class="icon-question" @click="textClick('你点击了 icon-question')"></text>
  </view>
</my-navigation-bar>`,
      code2_2:
`methods: {
  backClick() {
    this.$uni.navigateBack(1)
  },
  textClick(str) {
    this.$uni.showToast(str)
  }
}`,
      code2_3:
`.navigation-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 12px;
}`,
      code3:
`<my-navigation-bar
  bgImg="/static/basic.jpg"
  back
  title="背景图片"
  color="#FFFFFF" />`,
      code4:
`<my-navigation-bar
  :opacity="opacity"
  :bgColor="$config.lgTheme"
  back
  title="背景渐现"
  color="#FFFFFF" />`,
      code4_4:
`import transparentTitle from '@/mixins/transparent-title.js'
export default {
  mixins: [transparentTitle]
}`
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
