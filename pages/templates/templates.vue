<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigationBar title="my-uni-app"/>
    <view class="map">
      <view v-for="item in 40" :key="item">地图</view>
    </view>
    <my-tabBar/>
  </view>
</template>

<script>
</script>

<style>
</style>
