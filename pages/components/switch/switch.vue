<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">文字开关</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-switch checked uncheckedText="否" checkedText="是" @change="handleChange" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">渐变开关</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-switch checked uncheckedText="否" checkedText="是" color="linear-gradient(to bottom, #687CD5, #DFA3D6)" @change="handleChange" />
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
            <view class="td">uncheckedText</view>
            <view class="td">未选中的文本</view>
          </view>
          <view class="tr">
            <view class="td">checkedText</view>
            <view class="td">选中的文本</view>
          </view>
          <view class="tr">
            <view class="td">disabled</view>
            <view class="td">是否禁用</view>
          </view>
          <view class="tr">
            <view class="td">checked</view>
            <view class="td">是否选中</view>
          </view>
          <view class="tr">
            <view class="td">color</view>
            <view class="td">设置颜色</view>
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
`<my-switch
  checked
  uncheckedText="否"
  checkedText="是"
  @change="handleChange" />`,
      code2:
`<my-switch
  checked
  uncheckedText="否"
  checkedText="是"
  color="linear-gradient(to bottom, #687CD5, #DFA3D6)"
  @change="handleChange" />`
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
