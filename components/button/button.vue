<template>
  <button
    :size="size"
    :type="type"
    :plain="plain"
    :bgColor="bgColor"
    :loading="loading"
    :disabled="disabled"
    :hover-class="hoverClass"
    :style="[roundStyle, circleStyle, backgroundStyle ]">
    <text v-if="icon" :class="[iconClass]"></text>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hoverClass: {
      type: String,
      default: 'button-hover'
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    roundStyle() {
      if (this.round) {
        return {
          'border-radius': '20px'
        }
      }
    },
    circleStyle() {
      if (this.circle) {
        return {
          padding: '12px',
          'border-radius': '50%',
          'line-height': '1'
        }
      }
    },
    backgroundStyle() {
      if (this.bgColor) {
        return {
          'border-color': this.bgColor,
          'background-color': this.bgColor,
          'color': '#FFFFFF'
        }
      }
    },
    iconClass() {
      if (this.icon) {
        const iconClass = !this.circle
          ? `icon-${this.icon} mr-5`
          : `icon-${this.icon}`
        return iconClass
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-hover {
  opacity: .8;
}
</style>
