<template>
  <view :style="[navigationBar]">
    <my-navigation-bar back title="启动图" />
    <view class="doc-container">
    
      <view class="doc-row">
        <view class="doc-title">基础用法</view>
        <view class="flex justify-center w-100 pt-50 pb-50">
          <my-button :bgColor="$config.btnDefault" size="mini" @click="handleClick(undefined, undefined, undefined)">演 示</my-button>
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
        <view class="doc-title">设置时长</view>
        <view class="flex justify-center w-100 pt-50 pb-50">
          <my-button :bgColor="$config.btnSuccess" size="mini" @click="handleClick(5000)">演 示</my-button>
        </view>
        <view class="doc-code">
          <text class="doc-code-type">template</text>
          <scroll-view :scroll-x="true">
            <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
          </scroll-view>
        </view>
      </view>
    
      <view class="doc-row">
        <view class="doc-title">设置位置</view>
        <view class="flex justify-center w-100 pt-50 pb-50">
          <my-button :bgColor="$config.btnWarning" size="mini" @click="handleClick(undefined, 'tl')">演 示</my-button>
        </view>
        <view class="doc-code">
          <text class="doc-code-type">template</text>
          <scroll-view :scroll-x="true">
            <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
          </scroll-view>
        </view>
      </view>
    
      <view class="doc-row">
        <view class="doc-title">设置图片</view>
        <view class="flex justify-center w-100 pt-50 pb-50">
          <my-button :bgColor="$config.btnDanger" size="mini" @click="handleClick(undefined, undefined, '/static/launch2.jpg')">演 示</my-button>
        </view>
        <view class="doc-code">
          <text class="doc-code-type">template</text>
          <scroll-view :scroll-x="true">
            <text class="doc-code-text" space="nbsp">{{ code4 }}</text>
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
              <view class="td">duration</view>
              <view class="td">设置倒数时长</view>
            </view>
            <view class="tr">
              <view class="td">position</view>
              <view class="td">设置按钮位置（tl | tr | bl | br）</view>
            </view>
            <view class="tr">
              <view class="td">src</view>
              <view class="td">设置图片路径</view>
            </view>
            <view class="tr">
              <view class="td">text</view>
              <view class="td">设置按钮文本</view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
      
    <my-launch-img ref="launchImg" :duration="duration" :position="position" :src="src" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      duration: 3000,
      position: 'br',
      src: '/static/launch1.jpg',
      code1:
`<my-launch-img ref="launchImg" />`,
      code1_1: 
`this.$refs.launchImg.open()`,
      code2:
`<my-launch-img
  ref="launchImg"
  :duration="5000" />`,
      code3:
`<my-launch-img
  ref="launchImg"
  position="br" />`,
      code4:
`<my-launch-img
  ref="launchImg"
  src="/static/launch2.jpg" />`
    }
  },
  methods: {
    handleClick(duration = 3000, position = 'br', src = '/static/launch1.jpg') {
      this.duration = duration
      this.position = position
      this.src = src
      setTimeout(() => {
        this.$refs.launchImg.open()
      }, 150)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 385px;
}
</style>
