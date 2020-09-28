<template>
  <scroll-view
    class="scroll-view"
    :scroll-y="true">
    <view class="container">
      <view class="item">
        <view class="item-content">
          <view class="item-content-title text-line-2">虎扑专访齐麟：第一次扣篮在初二，有信息承担更多责任</view>
          <view class="item-content-info">
            <view class="flex">
              <view class="mr-15">
                <text class="icon-commentfill"></text>
                <text>10</text>
              </view>
              <view>
                <text class="icon-creativefill"></text>
                <text>10</text>
              </view>
            </view>
            <view>
              <text class="tag">置顶</text>
            </view>
          </view>
        </view>
        <image class="item-img" src="/static/swiper4.jpg" mode="aspectFill"></image>
      </view>
      <view class="item" v-for="item in 5" :key="item">
        <view class="item-content">
          <view class="item-content-title text-line-2">虎扑专访齐麟：第一次扣篮在初二，有信息承担更多责任</view>
          <view class="item-content-info">
            <view class="flex">
              <view class="mr-15">
                <text class="icon-commentfill"></text>
                <text>10</text>
              </view>
              <view>
                <text class="icon-creativefill"></text>
                <text>10</text>
              </view>
            </view>
          </view>
        </view>
        <image class="item-img" src="/static/swiper4.jpg" mode="aspectFill"></image>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'Cba'
}
</script>

<style lang="scss" scoped>
@import '~@/styles/swiper-list.scss';
</style>
