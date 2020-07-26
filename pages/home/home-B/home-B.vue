<template>
  <view class="p-20">
    <view class="item" @click="itemClick">点击跳转到 列表</view>
  </view>
</template>

<script>
export default {
  methods: {
    itemClick() {
      this.$uni.reLaunch({ url: '../../tabBar/list/list' })
    }
  }
}
</script>

<style>
</style>
