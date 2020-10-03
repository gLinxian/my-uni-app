<template>
  <view class="doc-container">
  
    <view class="doc-row">
      <view class="doc-title">基础用法</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-number-box v-model="number" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">设置范围</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-number-box v-model="number2" :min="1" :max="5" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">设置步进数</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-number-box v-model="number3" :step="0.5" :min="1" :max="5" />
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">设置颜色</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-number-box v-model="number3" :bgColor="$config.lgTheme" />
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
            <view class="td">min</view>
            <view class="td">设置最小值</view>
          </view>
          <view class="tr">
            <view class="td">max</view>
            <view class="td">设置最大值</view>
          </view>
          <view class="tr">
            <view class="td">step</view>
            <view class="td">设置步进数</view>
          </view>
          <view class="tr">
            <view class="td">disabled</view>
            <view class="td">是否禁用</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">设置背景颜色</view>
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
      number: 1,
      number2: 2,
      number3: 1,
      code1:
`<my-number-box
  v-model="number" />`,
      code2:
`<my-number-box
  v-model="number"
  :min="1"
  :max="5" />`,
      code3:
`<my-number-box
  v-model="number"
  :step="0.5
  :min="1"
  :max="5" />`,
      code4:
`<my-number-box
  v-model="number"
  bgColor="#687CD5" />`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
