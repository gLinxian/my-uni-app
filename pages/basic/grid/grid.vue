<template>
  <view class="doc-container">
    <view class="doc-row">
      <view class="doc-title">栅格布局</view>
      <view class="row">
        <view class="col-12 item bg-green">col-12: 100%</view>
      </view>
      <view class="row">
        <view class="col-11 item bg-green">col-11: 91.67%</view>
        <view class="col-1 item bg-green fs-10">col-1</view>
      </view>
      <view class="row">
        <view class="col-10 item bg-green">col-10: 83.33%</view>
        <view class="col-2 item bg-green">col-2</view>
      </view>
      <view class="row">
        <view class="col-9 item bg-green">col-9: 75%</view>
        <view class="col-3 item bg-green fs-10">col-3: 25%</view>
      </view>
      <view class="row">
        <view class="col-8 item bg-green">col-8: 66.67%</view>
        <view class="col-4 item bg-green fs-10">col-4: 33.33%</view>
      </view>
      <view class="row">
        <view class="col-7 item bg-green">col-7: 58.33%</view>
        <view class="col-5 item bg-green">col-5: 41.67%</view>
      </view>
      <view class="row">
        <view class="col-6 item bg-green">col-6: 50%</view>
        <view class="col-6 item bg-green">col-6: 50%</view>
      </view>
      <view class="row">
        <view class="col-5 item bg-green">col-5</view>
        <view class="col-4 item bg-green">col-4</view>
        <view class="col-3 item bg-green">col-3</view>
      </view>
      <view class="row">
        <view class="col-4 item bg-blue">col-4</view>
        <view class="col-4 item bg-blue">col-4</view>
        <view class="col-4 item bg-blue">col-4</view>
      </view>
      <view class="row">
        <view class="col-3 item bg-blue">col-3</view>
        <view class="col-3 item bg-blue">col-3</view>
        <view class="col-3 item bg-blue">col-3</view>
        <view class="col-3 item bg-blue">col-3</view>
      </view>
      <view class="row">
        <view class="col-2 item bg-blue">col-2</view>
        <view class="col-2 item bg-blue">col-2</view>
        <view class="col-2 item bg-blue">col-2</view>
        <view class="col-2 item bg-blue">col-2</view>
        <view class="col-2 item bg-blue">col-2</view>
        <view class="col-2 item bg-blue">col-2</view>
      </view>
      <view class="row">
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
        <view class="col-1 item bg-blue fs-10">col-1</view>
      </view>
    </view>
    <view class="doc-row">
      <view class="doc-title">使用</view>
      <view class="doc-code mb-10">
        <text class="doc-code-type">template</text>
        <text space="nbsp">{{ template }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      template: 
`<view class="row">
  <view class="col-12"></view>
</view>

<view class="row">
  <view class="col-11"></view>
  <view class="col-1"></view>
</view>

<view class="row">
  <view class="col-10"></view>
  <view class="col-2"></view>
</view>

<view class="row">
  <view class="col-9"></view>
  <view class="col-3"></view>
</view>

<view class="row">
  <view class="col-8"></view>
  <view class="col-4"></view>
</view>

<view class="row">
  <view class="col-7"></view>
  <view class="col-5"></view>
</view>

<view class="row">
  <view class="col-6"></view>
  <view class="col-6"></view>
</view>

<view class="row">
  <view class="col-5"></view>
  <view class="col-4"></view>
  <view class="col-3"></view>
</view>

<view class="row">
  <view class="col-4"></view>
  <view class="col-4"></view>
  <view class="col-4"></view>
</view>

<view class="row">
  <view class="col-3"></view>
  <view class="col-3"></view>
  <view class="col-3"></view>
  <view class="col-3"></view>
</view>

<view class="row">
  <view class="col-2"></view>
  <view class="col-2"></view>
  <view class="col-2"></view>
  <view class="col-2"></view>
  <view class="col-2"></view>
  <view class="col-2"></view>
</view>

<view class="row">
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
  <view class="col-1"></view>
</view>`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

.row {
  width: 100%;
  margin-bottom: 10px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  color: $white;
  &:first-child {
    background-color: #ECF5FF;
    color: #409EFF;
  }
  &:nth-child(2) {
    background-color: #F0F9EB;
    color: #67C23A;
  }
  &:nth-child(3) {
    background-color: #FDF6EC;
    color: #E6A23C;
  }
  &:nth-child(4) {
    background-color: #FEF0F0;
    color: #F56C6C;
  }
  &:nth-child(5) {
    background-color: #F4F4F5;
    color: #909399;
  }
  &:nth-child(6) {
    background-color: #FFFFFF;
    color: #606266;
  }
  &:nth-child(7) {
    background-color: #ECF5FF;
    color: #409EFF;
  }
  &:nth-child(8) {
    background-color: #F0F9EB;
    color: #67C23A;
  }
  &:nth-child(9) {
    background-color: #FDF6EC;
    color: #E6A23C;
  }
  &:nth-child(10) {
    background-color: #FEF0F0;
    color: #F56C6C;
  }
  &:nth-child(11) {
    background-color: #F4F4F5;
    color: #909399;
  }
  &:nth-child(12) {
    background-color: #FFFFFF;
    color: #606266;
  }
}
</style>
