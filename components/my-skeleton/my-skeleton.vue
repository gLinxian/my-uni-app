<template>
  <view class="skeleton">
    <view class="skeleton-item" v-for="item in number" :key="item">
      <view class="skeleton-row image" v-if="image" :style="{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`
      }"></view>
      <view class="skeleton-content">
        <view class="skeleton-row title"></view>
        <view class="skeleton-row" v-for="item in rows" :key="item"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MySkeleton',
  props: {
    number: {
      type: Number,
      default: 4
    },
    image: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    radius: {
      type: Number,
      default: 25
    },
    rows: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton {
  width: 100%;
  padding: 15px;
  &-item {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &-row {
    width: 100%;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 4px;
    background-color: #F2F3F5;
    animation: blink 1s linear infinite;
    @keyframes blink {
      50% {
        opacity: 0.6;
      }
    }
    &.image {
      margin-right: 15px;
    }
    &.title {
      width: 33.33%;
      margin-bottom: 20px;
    }
    &:last-child {
      width: 75%;
      margin-bottom: 0;
    }
  }
}
</style>
