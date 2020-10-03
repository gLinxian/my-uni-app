<template>
  <label class="label">
    <switch
      class="switch"
      :disabled="disabled"
      :checked="checked"
      @change="switchChange" />
    <view
      class="view"
      :class="{ 'checked': isChecked }"
      :style="{ 'background': isChecked ? color : '#E9E9E9' }"
      :data-unchecked="uncheckedText"
      :data-checked="checkedText"></view>
  </label>
</template>

<script>
export default {
  name: 'MySwitch',
  props: {
    uncheckedText: {
      type: String,
      default: ''
    },
    checkedText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#30D158'
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  watch: {
    checked: {
      handler(val) {
        this.isChecked = val
      },
      immediate: true
    }
  },
  methods: {
    switchChange(e) {
      this.isChecked = e.detail.value
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  width: 52px;
  height: 32px;
}
.switch {
  display: none;
}
.view {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;
  border-radius: 16px;
  transition: .3s all ease-in-out;
  &::before, &::after, &.checked::before {
    position: absolute;
    top: 2px;
    display: inline-block;
    width: 28px;
    height: 28px;
  }
  &::before, &.checked::before {
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
    line-height: 28px;
  }
  &::before {
    content: attr(data-unchecked);
    right: 0;
  }
  &::after {
    content: '';
    border-radius: 14px;
    background-color: #FFFFFF;
    box-shadow: 1px 0 4px rgba(0, 0, 0, .1);
    transition: .3s all ease-in-out;
    transform: translateX(2px);
  }
  &.checked::before {
    content: attr(data-checked);
    left: 0;
  }
  &.checked::after {
    box-shadow: -1px 0 4px rgba(0, 0, 0, .1);
    transform: translateX(22px);
  }
}
</style>
