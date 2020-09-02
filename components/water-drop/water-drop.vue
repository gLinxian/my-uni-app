<template>
  <view class="waterdrop" :style="{ 'background-color': themeMap[bgColor] }">
    <view class="drop" :style="{ 'background-color': themeMap[theme] }"></view>
    <view class="drop" :style="{ 'background-color': themeMap[theme] }"></view>
    <view class="drop" :style="{ 'background-color': themeMap[theme] }"></view>
    <view class="collection">
      <view class="collection-box" :style="{ 'background-color': themeMap[theme] }"></view>
      <text class="collection-text" :style="{ 'color': themeMap[color] }">{{ text }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyWaterDrop',
  props: {
    theme: {
      type: String,
      default: 'blue'
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'white'
    },
    text: {
      type: String,
      default: '80%'
    }
  },
  data() {
    return {
      themeMap: {
        'red': '#FF0000',    // 红色
        'green': '#00FF00',  // 绿色
        'blue': '#0000FF',   // 蓝色
        'cyan': '#00FFFF',   // 青色
        'violet': '#FF00FF', // 紫色
        'yellow': '#FFFF00', // 黄色
        'white': '#FFFFFF',  // 白色
        'black': '#000000'   // 黑色
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.waterdrop {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 120px;
  height: 250px;
  padding-bottom: 15px;
  filter: contrast(30); /* 对比度 */
  overflow: hidden;
}
.drop {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  animation: 2.5s drop linear infinite;
  &:nth-child(2) {
    animation-delay: .5s;
  }
  &:nth-child(3) {
    animation-delay: .7s;
  }
  @keyframes drop {
    0% {
      transform: scale(.7) translateY(-600%);
      opacity: 0;
    }
    50% {
      transform: scale(.4) translateY(-80%);
      opacity: 1;
    }
    100% {
      transform: scale(.3) translateY(0px);
    }
  }
}
.collection {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  &-box {
    position: absolute;
    z-index: 1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    filter: blur(20px);
    animation: 2.5s collection linear infinite;
    @keyframes collection{
      0% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        width: 90px;
        border-top-left-radius: 40%;
        border-bottom-left-radius: 45%;
        transform: scale(1.3) rotate(180deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
  }
  &-text {
    position: absolute;
    z-index: 2;
    color: #FFFFFF;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
  }
}
</style>
