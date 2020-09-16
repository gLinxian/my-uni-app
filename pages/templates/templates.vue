<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="my-uni-app"/>
    <view class="map">
      <view v-for="item in 40" :key="item">地图</view>
    </view>
    <my-tab-bar/>
  </view>
</template>

<script>
</script>

<style>
</style>
