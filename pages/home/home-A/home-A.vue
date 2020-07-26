<template>
  <view :style="[navigationBar]">
    <my-navigationBar title="my-uni-app"/>
    <view class="p-20">
      <view class="item" @click="itemClick">点击跳转到 home-B</view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    itemClick() {
      this.$uni.navigateTo({ url: '../../home/home-B/home-B' })
    }
  }
}
</script>

<style>
</style>
