<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-skeleton class="w-100" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">设置数量</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-skeleton class="w-100" :number="2" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">图片圆角</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-skeleton class="w-100" :radius="4" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">不要图片</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-skeleton class="w-100" :image="false" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code4 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">设置行数</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-skeleton class="w-100" :rows="2" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code5 }}</text>
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
            <view class="td">number</view>
            <view class="td">设置数量</view>
          </view>
          <view class="tr">
            <view class="td">image</view>
            <view class="td">是否显示图片</view>
          </view>
          <view class="tr">
            <view class="td">width</view>
            <view class="td">设置图片宽度</view>
          </view>
          <view class="tr">
            <view class="td">height</view>
            <view class="td">设置图片高度</view>
          </view>
          <view class="tr">
            <view class="td">radius</view>
            <view class="td">设置圆角</view>
          </view>
          <view class="tr">
            <view class="td">rows</view>
            <view class="td">设置行数</view>
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
`<my-skeleton />`,
      code2:
`<my-skeleton :number="2" />`,
      code3:
`<my-skeleton :radius="4" />`,
      code4:
`<my-skeleton :image="false" />`,
      code5:
`<my-skeleton :rows="2" />`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
