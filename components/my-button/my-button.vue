<template>
  <button
    :size="size"
    :type="type"
    :plain="plain"
    :bgColor="bgColor"
    :loading="loading"
    :disabled="disabled"
    :hover-class="hoverClass"
    :style="[roundStyle, circleStyle, backgroundStyle]"
    @click="click">
    <text v-if="icon" :class="[iconClass]"></text>
    <slot></slot>
    <text v-if="suffixIcon" :class="[iconClass]"></text>
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
    },
    suffixIcon: {
      type: String,
      default: ''
    }
  },
  computed: {
    roundStyle() {
      if (this.round) {
        return {
          'border-radius': '23px'
        }
      }
    },
    circleStyle() {
      if (this.circle) {
        return {
          'padding': '12px',
          'border-radius': '50%',
          'line-height': '1'
        }
      }
    },
    backgroundStyle() {
      if (this.bgColor) {
        return {
          'border-color': this.bgColor,
          'background': this.bgColor,
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

      if (this.suffixIcon) {
        const iconClass = !this.circle
          ? `icon-${this.suffixIcon} ml-5`
          : `icon-${this.suffixIcon}`
        return iconClass
      }
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.button-hover {
  opacity: .8;
}
</style>
