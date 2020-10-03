<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-upload-img @change="handleChange" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1_1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">圆形</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-upload-img :radius="50" @change="handleChange" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">背景图</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-upload-img :radius="50" bgImg="/static/avatar.jpg" @change="handleChange" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">设置文本</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-upload-img :radius="50" text="上传图片" @change="handleChange" />
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
            <view class="td">width</view>
            <view class="td">设置宽度</view>
          </view>
          <view class="tr">
            <view class="td">height</view>
            <view class="td">设置高度</view>
          </view>
          <view class="tr">
            <view class="td">radius</view>
            <view class="td">设置圆角</view>
          </view>
          <view class="tr">
            <view class="td">shadow</view>
            <view class="td">是否显示阴影</view>
          </view>
          <view class="tr">
            <view class="td">bgImg</view>
            <view class="td">设置背景图</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">设置背景颜色</view>
          </view>
          <view class="tr">
            <view class="td">text</view>
            <view class="td">设置文本内容</view>
          </view>
          <view class="tr">
            <view class="td">color</view>
            <view class="td">设置文本颜色</view>
          </view>
          <view class="tr">
            <view class="td">fontSize</view>
            <view class="td">设置文本大小</view>
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
`<my-upload-img
  @change="handleChange" />`,
      code1_1:
`handleChange(e) {
  console.log(e) // base64 路径
}`,
      code2:
`<my-upload-img :radius="50" />`,
      code3:
`<my-upload-img
  :radius="50"
  bgImg="/static/avatar.jpg" />`,
      code4:
`<my-upload-img
  :radius="50"
  text="上传图片" />`
    }
  },
  methods: {
    handleChange(e) {
      // console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
