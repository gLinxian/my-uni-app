<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-tabs class="w-100" v-model="tabIndex" :items="tabItems" />
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
      <view class="doc-title">居中</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-tabs class="w-100" v-model="tabIndex" :items="tabItems" style="width: 200px" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">超出</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-tabs class="w-100" />
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">颜色</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-tabs class="w-100" color="#007AFF" />
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
            <view class="td">items</view>
            <view class="td">选项数据数组</view>
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
      tabIndex: 0,
      tabItems: [
        { id: 1, name: '配置' },
        { id: 2, name: 'uni-api' },
        { id: 3, name: '函数' },
      ],
      code1:
`<my-tabs
  v-model="tabIndex"
  :items="tabItems" />`,
      code1_1:
`data() {
  return {
    tabIndex: 0,
    tabItems: [
      { id: 1, name: '配置' },
      { id: 2, name: 'uni-api' },
      { id: 3, name: '函数' },
    ]
  }
}`,
      code2:
`<my-tabs
  v-model="tabIndex"
  :items="tabItems"
  style="width: 200px" />`,
      code3:
`<my-tabs color="#007AFF" />`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
