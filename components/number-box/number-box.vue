<template>
  <view class="numberbox">
    <view class="button">
      <text class="icon-move" @click="moveClick"></text>
    </view>
    <view
      class="number"
      :class="{ before: isBefore, after: isAfter }"
      :data-before="numberBefore"
      :data-after="numberAfter">
      {{ number }}
    </view>
    <view class="button">
      <text class="icon-add" @click="addClick"></text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyNumberBox',
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      number: 0,
      isBefore: false,
      isAfter: false
    }
  },
  computed: {
    numberBefore() {
      return this.number - this.step
    },
    numberAfter() {
      return this.number + this.step
    },
    isAnimating() {
      return this.isBefore || this.isAfter
    }
  },
  created() {
    this.number = this.value
  },
  methods: {
    moveClick() {
      if (
        this.isAnimating ||
        this.number === this.min ||
        this.disabled
      ) return

      this.isBefore = true
      setTimeout(() => {
        this.number -= this.step
        this.$emit('change', this.number)
        this.isBefore = false
      }, 200)
    },
    addClick() {
      if (
        this.isAnimating ||
        this.number === this.max ||
        this.disabled
      ) return

      this.isAfter = true
      setTimeout(() => {
        this.number += this.step
        this.$emit('change', this.number)
        this.isAfter = false
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
.numberbox {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 120px;
  height: 35px;
  padding: 8px 0;
  border-radius: 3px;
  background-color: #000000;
  overflow: hidden;
  color: #FFFFFF;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, .9) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, .9) 100%
    );
  }
}
.number {
  display: block;
  flex: 1 1 120px;
  color: #FFFFFF;
  font-size: 19px;
  text-align: center;
  line-height: 19px;
  transform: translateY(-19px);
  &::before {
    content: attr(data-before);
    display: block;
  }
  &::after {
    content: attr(data-after);
    display: block;
  }
  &.before {
    transition: transform .2s ease-in;
    transform: translateY(0);
  }
  &.after {
    transition: transform .2s ease-in;
    transform: translateY(-38px);
  }
}
.button {
  position: relative;
  z-index: 100;
  flex: 0 0 30px;
  width: 19px;
  height: 19px;
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;
  line-height: 19px;
}
</style>
