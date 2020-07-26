<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigationBar title="my-uni-app"/>

    <my-picker type="region" @change="change" @cancel="cancel">{{ region }}</my-picker>

    <my-tabBar/>
  </view>
</template>

<script>
export default {
  data() {
    return {
      region: '请选择省市区'
    }
  },
  methods: {
    change(val) {
      this.region = val
    },
    cancel() {
      this.cancel = '请选择省市区'
    }
  }
}
</script>
