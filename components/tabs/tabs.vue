<template>
  <scroll-view class="scroll-view " :scroll-x="true" :show-scrollbar="false">
    <view class="tabs" :style="{ width: `${tabsWidth}px` }">
      <view class="tab" v-for="(item, index) in data" :key="item.id" @click="tabClick(item, index)">
        <view 
          class="tab-text" 
          :class="{ 'tab-active': active === item.name }" 
          :style="{ color: active === item.name ? color : '#333333' }">
          {{ item.name }}
        </view>
      </view>
      <view class="line" :style="{ width: lineWidth, left: `${lineLeft}px`, backgroundColor: color }"></view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'MyTabs',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    color: {
      type: String,
      default: '#007AFF'
    }
  },
  data() {
    return {
      active: '',
      tabsWidth: '',
      tabsData: [],
      lineWidth: '',
      lineLeft: 20
    }
  },
  mounted() {
    setTimeout(() => {
      this.computedTabs()
      this.tabClick(this.data[0], 0)
    }, 200)
  },
  methods: {
    computedTabs() {
      uni.createSelectorQuery()
        .in(this)
        .selectAll('.tab')
        .fields({
        size: true
      }, data => {
        this.tabsData = data
        this.tabsWidth = data.reduce((acc, current) => {
          acc += current.width + 20
          return acc
        }, 0)
      }).exec()
    },
    tabClick(item, index) {
      this.active = item.name
      this.lineWidth = `${this.tabsData[index].width}px`
      this.lineLeft = this.tabsData.slice(0, index)
        .reduce((acc, current) => {
        acc += current.width + 20
        return acc
      }, 0) + 20
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-view  {
  width: 100%;
  height: 45px;
  background-color: #FFFFFF;
}
.tabs {
  position: relative;
  display: flex;
  width: 9999px;
  padding-left: 20px;
  .tab {
    margin-right: 20px;
    &-text {
      box-sizing: border-box;
      height: 45px;
      border-bottom: 2px solid #FFFFFF;
      color: #333333;
      font-size: 16px;
      line-height: 45px;
      transition: all .3s;
    }
    &-active {
      font-weight: 600;
    }
  }
  .line {
    position: absolute;
    bottom: 0;
    height: 2px;
    transition: all .3s;
  }
}
</style>
