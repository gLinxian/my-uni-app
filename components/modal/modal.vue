<template>
  <view
    class="modal-container"
    :class="[ isAnimate ? (!isOut ? 'zoom-in' : 'zoom-out') : '' ]"
    :style="{ display: isShow }">
    <view class="mask"></view>
    <view class="modal">
      <view class="modal-header">
        <text class="modal-header-title">{{ title || object.title }}</text>
      </view>
      <view class="modal-body">{{ content || object.content }}</view>
      <view class="modal-footer">
        <view
          v-if="showCancel_"
          class="modal-footer-btn"
          :style="{ color: cancelColor_ }"
          @click="btnClick('cancel')">{{ cancelText_ }}</view>
        <view
          class="modal-footer-btn"
          :style="{
            borderLeft: confirmBorder_,
            color: confirmColor_
          }"
          @click="btnClick('confirm')">{{ confirmText_ }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    isAnimate: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    },
    showCancel: {
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
      isOut: false,
      isApi: true,
      object: {}
    }
  },
  computed: {
    isShow() {
      return (!this.isApi || this.object.show) ? 'flex' : 'none'
    },
    showCancel_() {
      return this.isApi ? this.object.showCancel : this.showCancel
    },
    cancelColor_() {
      return this.isApi ? this.object.cancelColor : this.cancelColor
    },
    cancelText_() {
      return this.isApi ? this.object.cancelText.slice(0, 3) : this.cancelText.slice(0, 3)
    },
    confirmBorder_() {
      return (this.isApi ? this.object.showCancel : this.showCancel) ? '.5px solid #F5F5F5' : 'none'
    },
    confirmColor_() {
      return this.isApi ? this.object.confirmColor : this.confirmColor
    },
    confirmText_() {
      return this.isApi ? this.object.confirmText.slice(0, 3) : this.confirmText.slice(0, 3)
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
        this.isOut = true
        setTimeout(() => { 
          this.$store.commit('modal/SET_STATE', { key: 'show', val: false }) 
        }, this.isAnimate ? 300 : 0)

        this.object.success(res)
      } else {
        this.$emit('success', res)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
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
  background: rgba(0, 0, 0, 0.6);
}
.modal {
  z-index: 999;
  width: 80%;
  max-width: 300px;
  border-radius: 15px;
  background-color: #FFFFFF;
  overflow: hidden;
  text-align: center;
  &-header {
    box-sizing: border-box;
    padding: 1em 1.6em 0.3em;
    &-title {
      display: -webkit-box;
      overflow: hidden;
      color: $primary;
      font-size: 18px;
      font-weight: 400;
      word-wrap: break-word;
      word-break: break-all;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &-body {
    box-sizing: border-box;
    min-height: 40px;
    max-height: 400px;
    padding: 1.3em 1.6em 1.3em;
    border-bottom: .5px solid #F5F5F5;
    overflow-y: auto;
    color: #909399;
    font-size: 15px;
    line-height: 1.4;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap;
  }
  &-footer {
    display: flex;
    font-size: 18px;
    line-height: 48px;
    &-btn {
      flex: 1;
      box-sizing: border-box;
    }
  }
}
.zoom {
  &-in {
    animation: zoom-in .3s;
    @keyframes zoom-in {
      0% {
        opacity: 0;
        transform: scale(1.2);
      }
    }
  }
  &-out {
    animation: zoom-out .3s;
    @keyframes zoom-out {
      100% {
        opacity: 0;
        transform: scale(1.2);
      }
    }
  }
}
</style>
