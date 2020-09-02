<template>
  <view class="searchbar">
    <view
      class="input"
      :style="{
        'border-radius': radius,
        'background-color': bgColor
      }">
      <text :class="iconPrefix"></text>
      <label
        class="input_label"
        :class="{ animate: labelAnimate }"
        :data-before="labelBefore"
        :data-after="labelAfter"
        @animationend="handleAnimationend">
        <input
          v-model="input"
          class="input_input"
          type="text"
          :placeholder="placeholder"
          :placeholder-style="placeholderStyle"
          :disabled="disabled"
          :maxlength="maxlength"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @confirm="handleConfirm" />
      </label>
      <text
        v-show="!showClose && iconSuffix"
        :class="iconSuffix"></text>
      <text
        v-show="showClose"
        class="icon-roundclosefill"
        @click="handleClose"></text>
    </view>
    <view
      v-if="showCancel"
      class="cancel"
      @click="handleCancel">取消</view>
  </view>
</template>

<script>
export default {
  name: 'MySearchBar',
  props: {
    value: {
      type: String,
      default: ''
    },
    radius: {
      type: String,
      default: '18px'
    },
    bgColor: {
      type: String,
      default: '#F2F2F2'
    },
    iconPrefix: {
      type: String,
      default: 'icon-search'
    },
    iconSuffix: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    placeholders: {
      type: Array,
      default() {
        return []
      }
    },
    placeholderStyle: {
      type: String,
      default: 'color: #C0C4CC;'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 140
    },
    showCancel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: '',
      showClose: false,
      currentIndex: 0,
      isFocusing: false,
      isAnimationend: true
    }
  },
  computed: {
    labelAnimate() {
      return !this.isFocusing && this.isAnimationend
    },
    labelBefore() {
      return this.isFocusing
        ? '' :
        this.placeholders[this.currentIndex]
    },
    labelAfter() {
      const keyword = typeof this.placeholders[this.currentIndex + 1] === 'undefined'
        ? this.placeholders[0]
        : this.placeholders[this.currentIndex + 1]
      return this.isFocusing
        ? ''
        : keyword
    }
  },
  watch: {
    isFocusing: {
      handler() {
        if (this.placeholders.length > 0) {
          this.placeholder = !this.isFocusing
            ? '' :
            this.placeholders[this.currentIndex]
        }
      },
      immediate: true
    }
  },
  created() {
    this.input = this.value
  },
  methods: {
    handleAnimationend(e) {
      if (
        this.placeholder.length > 0 ||
        this.placeholders.length <= 0
      ) return
      
      this.isAnimationend = false
      this.currentIndex = typeof this.placeholders[this.currentIndex + 1] === 'undefined'
        ? 0
        : this.currentIndex + 1
      setTimeout(() => {
        this.isAnimationend = true
      }, 3000)
    },
    handleInput(e) {
      this.showClose = e.detail.value.length > 0
      this.$emit('change', e.detail.value)
    },
    handleFocus(e) {
      this.isFocusing = true
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.isFocusing = false
      this.$emit('blur', e)
    },
    handleConfirm(e) {
      this.$emit('confirm', e)
    },
    handleClose() {
      this.input = ''
      this.showClose = false
    },
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
}
.input {
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding: 0 8px;
  color: $secondary;
  font-size: 20px;
  &_label {
    flex: 1;
    position: relative;
    display: block;
    overflow: hidden;
    &::before {
      content: attr(data-before);
    }
    &::after {
      content: attr(data-after);
    }
    &::before, &::after {
      position: absolute;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      color: #C0C4CC;
      font-size: 16px;
    }
  }
  &_input {
    flex: 1;
  }
  & > .icon-search {
    margin-right: 8px;
  }
}
.animate {
  &::before {
    animation: .25s placeholder-before ease-in-out;
  }
  &::after {
    animation: .25s placeholder-after ease-in-out;
  }
  &::before, &::after {
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }
  @keyframes placeholder-before {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
  @keyframes placeholder-before {
    0% {
      transform: translateY(0%);
      opacity: 0;
    }
    100% {
      transform: translateY(-100%);
      opacity: 1;
    }
  }
}
.cancel {
  margin-left: 10px;
  color: $secondary;
}
</style>
