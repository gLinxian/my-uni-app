<template>
  <view class="doc-container">
    <view class="doc-intro">结合 contrast 和 blur 形成一种融合效果，因为改变了对比度的关系，所以无法自定义颜色。 </view>

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-water-drop text="50%" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">更换主题</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-water-drop text="50%" theme="green" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
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
            <view class="td">theme</view>
            <view class="td">设置主题（red | green | blue | cyan | violet | yellow | white | black）</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">设置水滴以外的背景色</view>
          </view>
          <view class="tr">
            <view class="td">text</view>
            <view class="td">设置文本</view>
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
'<my-water-drop text="50%" />',
      code2:
`<my-water-drop
  text="50%"
  theme="green" />`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 600px !important;
}
</style>
