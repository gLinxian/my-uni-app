<template>
  <scroll-view
    class="scroll-view"
    :scroll-y="true">
    <view class="container">
      <view class="item" v-for="item in 6" :key="item">
        <view class="item-content">
          <view class="item-content-title text-line-2">乔治城大学中锋厄梅尔-尤尔特塞文已参加火箭等队面试</view>
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
        <image class="item-img" src="/static/swiper3.jpg" mode="aspectFill"></image>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'Follow'
}
</script>

<style lang="scss" scoped>
@import '~@/styles/swiper-list.scss';
</style>
