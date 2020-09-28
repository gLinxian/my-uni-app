<template>
  <scroll-view
    class="scroll-view"
    :scroll-y="true"
    :refresher-enabled="true"
    :refresher-threshold="45"
    refresher-default-style="none"
    refresher-background="#F8F8F8"
    :refresher-triggered="refresherTriggered"
    @refresherpulling="refresherpulling"
    @refresherrefresh="refresherrefresh"
    @refresherrestore="refresherrestore"
    @refresherabort="refresherabort">
    <view class="container">
      <view class="item">
        <view class="item-content">
          <view class="item-content-title text-line-2">浓眉34+10詹姆斯28+11+9，湖人战胜火箭大比分1-1</view>
          <view class="item-content-info">
            <view>
              <text class="icon-commentfill"></text>
              <text>17316</text>
            </view>
            <view>
              <text class="tag">置顶</text>
              <text class="tag">专题</text>
            </view>
          </view>
        </view>
        <image class="item-img" src="/static/swiper1.jpg" mode="aspectFill"></image>
      </view>
      <view class="item" v-for="item in 10" :key="item">
        <view class="item-content">
          <view class="item-content-title text-line-2">大洛佩斯：米德尔顿的表现不可思议，他是出色的球队领袖</view>
          <view class="item-content-info">
            <view>
              <text class="icon-commentfill"></text>
              <text>10</text>
            </view>
          </view>
        </view>
        <image class="item-img" src="/static/swiper2.jpg" mode="aspectFill"></image>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'Nba',
  data() {
    return {
      refresherTriggered: true
    }
  },
  methods: {
    refresherpulling(e) {
      // 被下拉就触发
      if (e.detail.deltaY > 45) {
        this.$uni.showToast('下拉刷新')
      }
    },
    refresherrefresh(e) {
      // 刷新的时候触发
      setTimeout(() => {
        this.refresherTriggered = false
      }, 3000)
    },
    refresherrestore(e) {
      // 重置的时候触发
      this.$uni.showToast('刷新成功')
    },
    refresherabort(e) {
      // 中止的时候触发
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/swiper-list.scss';
</style>
