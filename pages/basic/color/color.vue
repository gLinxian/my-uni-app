<template>
  <view class="doc-container">

    <!-- 颜色 -->
    <view class="doc-row">
      <view class="doc-title">颜色</view>
      <view class="col-3" v-for="(item, index) in color" :key="index">
        <view class="item" :class="[`bg-${item.name}`]" :style="{ color: (
          item.name === 'white' ||
          item.name === 'lime' ||
          item.name === 'aqua'
        ) && '#000000' }">
          <text>{{ item.name }}</text>
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- 辅助 -->
    <view class="doc-row">
      <view class="doc-title">辅助</view>
      <view class="col-3" v-for="(item, index) in auxiliary" :key="index">
        <view class="item" :class="[`bg-${item.name}`]">
          <text>{{ item.name }}</text>
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- 文字 -->
    <view class="doc-row">
      <view class="doc-title">文字</view>
      <view class="col-3" v-for="(item, index) in text" :key="index">
        <view class="item" :class="[`bg-${item.name}`]">
          <text>{{ item.name }}</text>
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- 其他 -->
    <view class="doc-row">
      <view class="doc-title">其他</view>
      <view class="col-3" v-for="(item, index) in other" :key="index">
        <view class="item" :class="[`bg-${item.name}`]" :style="{
          color: item.name === 'bgColor' && '#000000'
        }">
          <text>{{ item.name }}</text>
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- 代码 -->
    <view class="doc-row">
      <view class="doc-title">使用</view>
      <view class="doc-code mb-10">
        <text class="doc-code-type">template</text>
        <text space="nbsp">{{ template }}</text>
      </view>
      <view class="doc-code mb-10">
        <text class="doc-code-type">script</text>
        <text space="nbsp">{{ script }}</text>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">style</text>
        <text space="nbsp">{{ style }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      color: [
        { name: 'theme', text: '#DA70D6' },
        { name: 'black', text: '#000000' },
        { name: 'gray', text: '#808080' },
        { name: 'silver', text: '#C0C0C0' },
        { name: 'maroon', text: '#800000' },
        { name: 'purple', text: '#800080' },
        { name: 'red', text: '#FF3B30' },
        { name: 'fuchsia', text: '#FF00FF' },
        { name: 'olive', text: '#808000' },
        { name: 'teal', text: '#008080' },
        { name: 'green', text: '#4CD964' },
        { name: 'lime', text: '#00FF00' },
        { name: 'navy', text: '#000080' },
        { name: 'blue', text: '#007AFF' },
        { name: 'aqua', text: '#00FFFF' },
        { name: 'white', text: '#FFFFFF' }
      ],
      auxiliary: [
        { name: 'default', text: '#409EFF' },
        { name: 'success', text: '#67C23A' },
        { name: 'warning', text: '#E6A23C' },
        { name: 'danger', text: '#F56C6C' },
        { name: 'info', text: '#909399' }
      ],
      text: [
        { name: 'primary', text: '#303133' },
        { name: 'general', text: '#606266' },
        { name: 'secondary', text: '#909399' },
        { name: 'placeholder', text: '#C0C4CC' },
      ],
      other: [
        { name: 'border', text: '#C8C7CC' },
        { name: 'bgColor', text: '#F8F8F8' }
      ],
      template:
`<view class="blue"></view>
<view class="bg-blue"></view>
<view :style="{ color: $config.blue }"></view>`,
      script: 
`data() {
  return {
    color: this.$config.blue
  }
}`,
      style: 
`.text {
  color: $blue;
}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  color: $white;
  font-size: 12px;
  & > text:first-child {
    margin-bottom: 10px;
  }
}
</style>
