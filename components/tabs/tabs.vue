<template>
  <scroll-view class="scroll-view " :scroll-x="true" :show-scrollbar="false">
    <view class="tabs" :style="{ width: `${tabsWidth}px` }">
      <view class="tab" v-for="(item, index) in items" :key="item.id" @click="tabClick(item, index)">
        <view class="tab-text" :style="{ color: active === item.name ? color : '#333333' }">{{ item.name }}</view>
      </view>
      <view class="line" :style="{ width: lineWidth, left: `${lineLeft}px`, backgroundColor: color }"></view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'MyTabs',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    items: {
      type: Array,
      default() {
        return [
          { id: 1, name: '新闻' },
					{ id: 2, name: '近期展会' },
					{ id: 3, name: '商圈信息' },
					{ id: 4, name: '广州物流' },
					{ id: 5, name: '广州旅游' }
        ]
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
  watch: {
    value(val) {
      this.tabClick(this.items[val], val)
    }
  },
  mounted() {
    setTimeout(() => {
      this.computedTabs()
      this.tabClick(this.items[this.value], this.value)
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
      this.$emit('input', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-view  {
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  border-bottom: .5px solid #F5F5F5;
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
      color: #333333;
      font-size: 16px;
      line-height: 45px;
      transition: all .3s;
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
