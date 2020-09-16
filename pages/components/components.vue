<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="my-uni-app"/>

    <view class="container">
      <view v-for="item in 40" :key="item">列表{{ item }}</view>
    </view>

    <my-tab-bar/>
  </view>
</template>

<style lang="scss" scoped>
.container {
  background-color: $bgColor;
}
</style>
