<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigationBar title="my-uni-app" />
    <view :style="[fullPage]" class="container">
      <!-- 页面内容写在这里 -->
      <my-pickern type="date" @change="change" @cancel="cancel">请选择1</my-pickern>
      <view @click="click">请选择2</view>
    </view>
    <my-picker ref="picker" @change="pickerChange" @cancel="pickerCancel" />
    <my-tabBar :midButton="true" />
  </view>
</template>

<script>
export default {
  methods: {
    click() {
      this.$refs.picker.open()
    },
    change(e) {
      console.log(e)
    },
    cancel(e) {
      console.log(e)
    },
    pickerChange(e) {
      console.log(e)
    },
    pickerCancel() {
      console.log('cancel')
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
