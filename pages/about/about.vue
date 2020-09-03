<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigationBar title="my-uni-app"/>
    <view class="my">
      <view v-for="item in 40" :key="item">我的</view>
    </view>
    <my-tabBar/>
  </view>
</template>

<script>
</script>

<style>
</style>
