<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="my-uni-app" />
    <view :style="[fullPage]" class="container">
      <!-- 页面内容写在这里 -->
      
    </view>
    <my-tab-bar :midButton="true" />
  </view>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
