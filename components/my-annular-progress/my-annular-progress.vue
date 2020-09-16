<template>
  <view :style="[circle]">
    <view :style="[circleBlock, circleBlockLeft]">
      <view :style="[circleBlockProgress, circleBlockProgressLeft]">
        <view :style="[circleBlockProgressRadius, circleBlockProgressRadiusLeft]"></view>
      </view>
    </view>
    <view :style="[circleBlock, circleBlockRight]">
      <view :style="[circleBlockProgress, circleBlockProgressRight]">
        <view :style="[circleBlockProgressRadius, circleBlockProgressRadiusRight]"></view>
      </view>
    </view>
    <view :style="[circleInner]">{{ text || `${value}%` }}</view>
  </view>
</template>

<script>
export default {
  name: 'MyAnnularProgress',
  props: {
    // 环形圆的直径
    circleDiam: {
      type: Number,
      default: 100,
    },
    // 无进度条区域的颜色
    circleColor: {
      type: String,
      default: '#FFFFFF',
    },
    // 数值大于50%进度条颜色
    halfColor: {
      type: String,
      default: '',
    },
    // 进度条的粗细
    progressSize: {
      type: Number,
      default: 10,
    },
    // 进度条的颜色
    progressColor: {
      type: String,
      default: '#409EFF',
    },
    // 遮盖圆的颜色
    coverColor: {
      type: String,
      default: '#FFFFFF',
    },
    // 中心文字
    text: {
      type: String,
      default: '',
    },
    // 中心文字大小
    textSize: {
      type: Number,
      default: 16,
    },
    // 中心文字颜色
    textColor: {
      type: String,
      default: '#333333',
    },
    // CSS 单位
    cssUnit: {
      type: String,
      default: 'px',
    },
    // 百分比数值
    value: {
      type: Number,
      default: 60,
    },
  },
  computed: {
    circle() {
      return {
        position: 'relative',
        width: this.circleDiam + this.cssUnit,
        height: this.circleDiam + this.cssUnit,
        backgroundColor: this.circleColor,
        borderRadius: '50%',
        overflow: 'hidden',
        zIndex: 0
      }
    },
    circleBlock() {
      return {
        position: 'absolute',
        width: this.circleDiam / 2 + this.cssUnit,
        height: this.circleDiam + this.cssUnit,
        overflow: 'hidden'
      }
    },
    circleBlockLeft() {
      return {
        left: 0
      }
    },
    circleBlockRight() {
      return {
        right: 0
      }
    },
    circleBlockProgress() {
      return {
        position: 'absolute',
        width: this.circleDiam / 2 + this.cssUnit,
        height: this.circleDiam + this.cssUnit
      }
    },
    circleBlockProgressLeft() {
      const backgroundColor =
        this.value > 50
          ? this.halfColor
            ? this.halfColor
            : this.progressColor
          : this.progressColor
      const val = this.value > 50 ? -180 + (this.value - 50) * 3.6 : -180
      return {
        backgroundColor: backgroundColor,
        transformOrigin: '100% 50%',
        transform: `rotate(${val}deg)`
      }
    },
    circleBlockProgressRight() {
      const backgroundColor =
        this.value > 50
          ? this.halfColor
            ? this.halfColor
            : this.progressColor
          : this.progressColor
      const val = this.value > 50 ? 0 : -180 + this.value * 3.6
      return {
        backgroundColor: backgroundColor,
        transformOrigin: '0% 50%',
        transform: `rotate(${val}deg)`
      }
    },
    circleBlockProgressRadius() {
      return {
        position: 'absolute',
        width: this.progressSize + this.cssUnit,
        height: this.progressSize + this.cssUnit,
        borderRadius: '50%'
      }
    },
    circleBlockProgressRadiusLeft() {
      const backgroundColor =
        this.value > 50
          ? this.halfColor
            ? this.halfColor
            : this.progressColor
          : this.circleColor
      const right = this.progressSize / 2
      return {
        top: 0,
        right: `-${right}${this.cssUnit}`,
        backgroundColor: backgroundColor
      }
    },
    circleBlockProgressRadiusRight() {
      const backgroundColor =
        this.value <= 50
          ? this.progressColor
          : this.halfColor
          ? this.halfColor
          : this.progressColor
      const left = this.progressSize / 2
      return {
        bottom: 0,
        left: `-${left}${this.cssUnit}`,
        backgroundColor: backgroundColor
      }
    },
    circleInner() {
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: this.circleDiam - this.progressSize * 2 + this.cssUnit,
        height: this.circleDiam - this.progressSize * 2 + this.cssUnit,
        margin: 'auto',
        backgroundColor: this.coverColor,
        borderRadius: '50%',
        color: this.textColor,
        fontSize: this.textSize + this.cssUnit,
        textAlign: 'center',
        lineHeight: this.circleDiam - this.progressSize * 2 + this.cssUnit,
        zIndex: 3
      }
    },
  },
}
</script>
