<template>
  <view class="container" :style="{ overflow: isActive ? 'hidden' : 'visible' }">
    <scroll-view
      class="card"
      v-for="item in data"
      :key="item.id"
      :scroll-top="viewScrollTop"
      :scroll-y="isActive && activeId === item.id"
      :class="{ active: isActive && activeId === item.id }"
      :style="{ position: isActive && activeId === item.id ? 'fixed' : 'static' }"
      @scroll="scroll"
      @click="click($event, item.id)">
      <image
        class="card-img"
        :class="{ active: isActive && activeId === item.id }"
        :src="item.src"
        mode="aspectFill"></image>
      <view class="card-content">
        <view class="card-content-item" v-for="item in 7" :key="item">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quod officiis exercitationem veniam veritatis odio eum sapiente accusamus rerum!
          Modi sit velit consequatur nulla repudiandae possimus! Numquam eligendi nemo ut nam?
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>

// 另外一种实现，可以现实上下的过渡，但有bug
// :style="{ transform: `translateY(${translateY}px)` }"
// translateY: 0
// this.translateY = this.isActive ? (e.currentTarget.offsetTop - this.pageScrollTop) * -1 : 0

export default {
  data() {
    return {
      isActive: false,
      viewScrollTop: 0,
      pageScrollTop: 0,
      activeId: 0,
      data: [
        { id: 1, src: '/static/card.jpg' },
        { id: 2, src: '/static/nba.jpg' },
        { id: 3, src: '/static/tea.jpg' },
        { id: 4, src: '/static/water.jpg' }
      ],
      
    }
  },
  onPageScroll(e) {
    if (!this.isActive) {
      /* 记录打开前的页面位置 */
      this.pageScrollTop = e.scrollTop
    }
  },
  methods: {
    scroll(e) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        /* 解决 scroll-top 无效的 bug */
        this.viewScrollTop = e.detail.scrollTop
      }, 100)
    },
    click(e, id) {
      this.viewScrollTop = 0
      this.$nextTick(() => {
        this.activeId = id
        this.isActive = !this.isActive
        setTimeout(() => { uni.pageScrollTo({ scrollTop: this.pageScrollTop, duration: 0 }) })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 44px);
  padding: 30px 0;
}
.card {
  top: 0;
  right: 0;
  left: 0;
  z-index: 997;
  width: 335px;
  height: 400px;
  margin: 0 auto 30px;
  border-radius: 15px;
  background-color: $white;
  box-shadow: 0 0 30px rgba(0, 0, 0, .2);
  overflow: hidden;
  transition: all .3s;
  &:last-child {
    margin-bottom: 0;
  }
  &.active {
    width: 100%;
    min-height: 100%;
    border-radius: 0;
  }
  &-img {
    width: 100%;
    height: 100%;
    &.active {
      height: 490px;
    }
  }
  &-content {
    box-sizing: border-box;
    padding: 20px;
    font-size: 18px;
    &-item {
      margin-bottom: 20px;
      text-indent: 36px;
      line-height: 1.8;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
