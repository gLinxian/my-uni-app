<template>
  <view class="doc-container">

    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-search-bar v-model="search" placeholder="请输入搜索关键字" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">后置图标</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-search-bar v-model="search2" placeholder="请输入搜索关键字" suffix-icon="icon-game" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">取消按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-search-bar v-model="search3" placeholder="请输入搜索关键字" showCancel @cancel="handleCancel" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">轮播动画</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-search-bar v-model="search4" :placeholders="placeholders" />
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
            <view class="td">radius</view>
            <view class="td">设置圆角</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">设置背景颜色</view>
          </view>
          <view class="tr">
            <view class="td">prefix-icon</view>
            <view class="td">前置图标</view>
          </view>
          <view class="tr">
            <view class="td">suffix-icon</view>
            <view class="td">后置图标</view>
          </view>
          <view class="tr">
            <view class="td">showCancel</view>
            <view class="td">是否显示取消按钮</view>
          </view>
          <view class="tr">
            <view class="td">placeholder</view>
            <view class="td">占位文字</view>
          </view>
          <view class="tr">
            <view class="td">placeholderStyle</view>
            <view class="td">占位文字样式</view>
          </view>
          <view class="tr">
            <view class="td">placeholders</view>
            <view class="td">轮播文本数组</view>
          </view>
          <view class="tr">
            <view class="td">disabled</view>
            <view class="td">是否禁用</view>
          </view>
          <view class="tr">
            <view class="td">maxlength</view>
            <view class="td">最大长度</view>
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
      search: '',
      search2: '',
      search3: '',
      search4: '',
      placeholders: [
        'iPhone 12 Mini',
        'iPhone 12',
        'iPhone 12 Pro',
        'iPhone 12 Pro Max'
      ],
      code1:
`<my-search-bar
  v-model="search"
  placeholder="请输入搜索关键字" />`,
      code2:
`<my-search-bar
  v-model="search"
  placeholder="请输入搜索关键字"
  suffix-icon="icon-game" />`,
      code3:
`<my-search-bar
  v-model="search"
  placeholder="请输入搜索关键字"
  showCancel
  @cancel="handleCancel" />`,
      code4:
`<my-search-bar
  v-model="search"
  :placeholders="placeholders" />`
    }
  },
  methods: {
    handleCancel() {
      this.$uni.showToast('你点击了取消按钮')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
