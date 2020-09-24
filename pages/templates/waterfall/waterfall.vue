<template>
  <view class="waterfall-container">
    <view class="waterfall" ref="waterfall">
      <view class="water-container">
        <view class="water">
          <image class="water-img" src="/static/water.jpg" mode="aspectFill"></image>
          <view class="water-content">
            <view class="mb-10 fs-14 text-line-2">蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1</view>
            <view class="flex justify-space-between align-center mb-10">
              <text class="red fs-10">¥<text class="fs-14">31.80</text></text>
              <text class="btn">看相似</text>
            </view>
            <view class="fs-10">¥30.00</view>
          </view>
        </view>
      </view>
      <view class="water-container">
        <view class="water">
          <image class="water-img" src="/static/water.jpg" mode="aspectFill"></image>
          <view class="water-content">
            <view class="mb-10 fs-14 text-line-2">蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1</view>
            <view class="flex justify-space-between align-center mb-10">
              <text class="red fs-10">¥<text class="fs-14">31.80</text></text>
              <text class="btn">看相似</text>
            </view>
          </view>
        </view>
      </view>
      <view class="water-container">
        <view class="water">
          <image class="water-img" src="/static/water.jpg" mode="aspectFill"></image>
          <view class="water-content">
            <view class="mb-10 fs-14 text-line-2">蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1</view>
            <view class="flex justify-space-between align-center mb-10">
              <text class="red fs-10">¥<text class="fs-14">31.80</text></text>
              <text class="btn">看相似</text>
            </view>
            <view class="fs-10">¥30.00</view>
          </view>
        </view>
      </view>
      <view class="water-container">
        <view class="water">
          <image class="water-img" src="/static/water.jpg" mode="aspectFill"></image>
          <view class="water-content">
            <view class="mb-10 fs-14 text-line-2">蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1</view>
            <view class="flex justify-space-between align-center mb-10">
              <text class="red fs-10">¥<text class="fs-14">31.80</text></text>
              <text class="btn">看相似</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Waterfall from './class/Waterfall'
export default {
  mounted() {
    new Waterfall(this.$refs.waterfall)
  }
}
</script>

<style lang="scss" scoped>
$height: calc(100vh - 44px);

/**
 * -container 是为了营造好看的边距多写出来的类
 */
.waterfall-container {
  box-sizing: border-box;
  width: 100%;
  min-height: $height;
  padding: 0 5px;
  background-color: $bgColor;
}
.waterfall {
  width: 100%;
}

.water-container {
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 10px;
  padding: 0 5px;
}
.water {
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  &-img {
    width: 100%;
  }
  &-content {
    padding: 5px 10px;
  }
}

.btn {
  padding: 2px 8px;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  color: $secondary;
  font-size: 10px;
}
</style>
