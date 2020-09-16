<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="my-uni-app"/>
    <view class="my">
      <view v-for="item in 40" :key="item">我的</view>
    </view>
    <my-tab-bar/>
  </view>
</template>

<script>
</script>

<style>
</style>
