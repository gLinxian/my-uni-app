<template>
  <view>
    <my-tab-bar v-if="type === '1'" />
    
    <my-tab-bar v-if="type === '2'" :midButton="true" />
    
    <my-tab-bar v-if="type === '3'" :midButton="true" >
      <view class="image" @click="handleClick">
        <image class="w-100 h-100 circle" src="/static/templates.gif" mode="aspectFill"></image>
      </view>
    </my-tab-bar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      type: ''
    }
  },

  onLoad(e) {
    this.type = e.type
  },

  methods: {
    handleClick() {
      this.$uni.showToast('皮卡皮卡')
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
</style>

