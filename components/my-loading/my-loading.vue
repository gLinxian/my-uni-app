<template>
	<view class="loading-container" :style="{ display: isShow }">
    <view class="mask" :style="{ display: mask ? 'block' : 'none' }"></view>
    <view class="loading">
      <view class="loading-pattern">
        <view class="annular">
          <view class='annular-part one' :style="{ backgroundColor: color }" />
          <view class='annular-part two' :style="{ backgroundColor: color }" />
          <view class='annular-part three' :style="{ backgroundColor: color }" />
        </view>
        <view class="cover">
          <image class="logo" :src="src" mode="aspectFit"></image>
        </view>
      </view>
      <view class="loading-text">{{ title }}</view>
    </view>
	</view>
</template>

<script>
export default {
  name: 'MyLoading',
  props: {
    src: {
      type: String,
      default: '/static/uni-logo.png'
    },
    color: {
      type: String,
      default: '#2B9939'
    },
    title: {
      type: String,
      default: '加载中...'
    },
    mask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      object: {}
    }
  },
  computed: {
    isShow() {
      return this.object.show ? 'flex' : 'none'
    }
  },
  created() {
    this.object = this.$store.state.loading
  },
  methods:{
    open() {
      this.$store.commit('loading/SET_STATE', { key: 'show', val: true })
    },
    close() {
      this.$store.commit('loading/SET_STATE', { key: 'show', val: false })
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, .6);
}
.loading {
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 10px 0;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 0 6px rgba(0, 0, 0, .35);
  &-pattern {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
  &-text {
    margin-top: 12px;
    color: #909399;
    font-size: 12px;
  }
}
.annular {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  animation: annular .8s linear infinite;
  @keyframes annular {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  &-part {
    position: absolute;
    top: 0; 
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0% 100%;
    &.one {
      transform: rotate(-30deg) skewY(-18deg);
      opacity: .9;
    }
    &.two {
      transform: rotate(42deg) skewY(-42deg);
      opacity: .6;
    }
    &.three {
      transform: rotate(90deg) skewY(-66deg);
      opacity: .3;
    }
  }
}
.cover {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: #FFFFFF;
}
.logo {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
</style>
