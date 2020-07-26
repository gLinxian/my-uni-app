<template>
  <view :style="[style, isShow]">
    <view class="mask"></view>
    <view class="modal" :class="[animation]">
      <view class="modal-header">
        <text class="modal-header-title">{{ title || object.title }}</text>
      </view>
      <view class="modal-body">{{ content || object.content }}</view>
      <view class="modal-footer">
        <view v-if="showCc" class="modal-footer-btn" :style="[ccColor]" @click="btnClick('cancel')">{{ ccText }}</view>
        <view class="modal-footer-btn" :style="[cfColor, cfBorder]" @click="btnClick('confirm')">{{ cfText }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelColor: {
      type: String,
      default: '#007AFF'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmColor: {
      type: String,
      default: '#007AFF'
    }
  },
  data() {
    return {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        'z-index': 999,
        display: 'block',
        'box-sizing': 'border-box'
      },
      isApi: true,
      object: {}
    }
  },
  computed: {
    isShow() {
      const isShow =
        !this.isApi || this.object.show
          ? { display: 'block' }
          : { display: 'none' }
      return isShow
    },
    cfBorder() {
      const cfBorder = (this.isApi
      ? this.object.showCancel
      : this.showCancel)
        ? { 'border-left': '.5px solid #C8C7CC' }
        : { 'border-left': 'none' }
      return cfBorder
    },
    showCc() {
      return this.isApi ? this.object.showCancel : this.showCancel
    },
    animation() {
      const animation = (this.isApi
      ? this.object.animate
      : this.animate)
        ? 'animation'
        : ''
      return animation
    },
    ccText() {
      const ccText = this.isApi
        ? this.object.cancelText.slice(0, 3)
        : this.cancelText.slice(0, 3)
      return ccText
    },
    ccColor() {
      const ccColor = this.isApi
        ? { color: this.object.cancelColor }
        : { color: this.cancelColor }
      return ccColor
    },
    cfText() {
      const cfText = this.isApi
        ? this.object.confirmText.slice(0, 3)
        : this.confirmText.slice(0, 3)
      return cfText
    },
    cfColor() {
      const cfColor = this.isApi
        ? { color: this.object.confirmColor }
        : { color: this.confirmColor }
      return cfColor
    }
  },
  created() {
    this.isApi = !this.$listeners.success
    this.isApi && (this.object = this.$store.state.modal)
  },
  methods: {
    btnClick(val) {
      const res = {
        [val]: true,
        errMsg: 'showModal:ok'
      }
      if (this.isApi) {
        this.$store.commit('modal/SET_MODAL', { key: 'show', val: false })
        this.object.success(res)
      } else {
        this.$emit('success', res)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 80%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 14px;
  text-align: center;
  overflow: hidden;
  &.animation {
    animation: scale 1s;
    @keyframes scale {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.2);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  &-header {
    box-sizing: border-box;
    padding: 1em 1.6em 0.3em;
    &-title {
      display: -webkit-box;
      color: $primary;
      font-size: 18px;
      font-weight: 400;
      word-wrap: break-word;
      word-break: break-all;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  &-body {
    box-sizing: border-box;
    min-height: 40px;
    max-height: 400px;
    padding: 1.3em 1.6em 1.3em;
    border-bottom: 0.5px solid $border;
    color: $secondary;
    font-size: 15px;
    line-height: 1.4;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap;
    overflow-y: auto;
  }
  &-footer {
    display: flex;
    font-size: 18px;
    line-height: 48px;
    &-btn {
      flex: 1;
      box-sizing: border-box;
      color: $blue;
    }
  }
}
</style>
