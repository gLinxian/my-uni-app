<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigationBar title="my-uni-app" />
    <view :style="[fullPage]" class="container">
      <!-- 页面内容写在这里 -->
      <view @click="click">请选择</view>
    </view>
    <my-picker ref="picker" type="region" />
    <my-tabBar :midButton="true" />
  </view>
</template>

<script>
export default {
  methods: {
    click() {
      this.$refs.picker.open()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
