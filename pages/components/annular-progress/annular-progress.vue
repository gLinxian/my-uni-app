<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-annular-progress :value="60" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">槽的颜色</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-annular-progress :value="60" troughColor="#ECF5FF" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">过半预警</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-annular-progress :value="60" troughColor="#ECF5FF" halfColor="#F56C6C" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">自定义大小</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-annular-progress :value="60" :circleDiam="70" :progressSize="5" troughColor="#ECF5FF" />
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
            <view class="td">value</view>
            <view class="td">进度值</view>
          </view>
          <view class="tr">
            <view class="td">progressColor</view>
            <view class="td">进度条的颜色</view>
          </view>
          <view class="tr">
            <view class="td">troughColor</view>
            <view class="td">槽的颜色</view>
          </view>
          <view class="tr">
            <view class="td">halfColor</view>
            <view class="td">数值大于50%进度条的颜色</view>
          </view>
          <view class="tr">
            <view class="td">coverColor</view>
            <view class="td">遮盖圆的颜色</view>
          </view>
          <view class="tr">
            <view class="td">circleDiam</view>
            <view class="td">环形圆的直径</view>
          </view>
          <view class="tr">
            <view class="td">progressSize</view>
            <view class="td">进度条的粗细</view>
          </view>
          <view class="tr">
            <view class="td">text</view>
            <view class="td">中间文本</view>
          </view>
          <view class="tr">
            <view class="td">textSize</view>
            <view class="td">中间文本大小</view>
          </view>
          <view class="tr">
            <view class="td">textColor</view>
            <view class="td">中间文本颜色</view>
          </view>
          <view class="tr">
            <view class="td">cssUnit</view>
            <view class="td">CSS 单位</view>
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
'<my-annular-progress :value="60" />',
      code2:
`<my-annular-progress
  :value="60"
  troughColor="#ECF5FF" />`,
      code3:
`<my-annular-progress
  :value="60"
  troughColor="#ECF5FF"
  halfColor="#F56C6C" />`,
      code4:
`<my-annular-progress
  :value="60"
  :circleDiam="70"
  :progressSize="5"
  troughColor="#ECF5FF" />`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 335px;
}

/* 第一列宽度  */
.th:first-child,
.td:first-child {
  min-width: 110px;
}  
</style>
