<template>
  <view class="sortlist">
    <view class="sort-list">
      <scroll-view class="scroll-view" :scroll-y="true">
        <view
          v-for="item in sort"
          :key="item.id"
          class="sort-list-item"
          :class="{ active: activeName === item.name }"
          @click="sortClick(item)">{{ item.name }}</view>
      </scroll-view>
    </view>
    <view class="goods-list">
      <scroll-view class="scroll-view" :scroll-y="true" :scroll-into-view="scrollIntoView">
        <view v-for="(val, key) in goods" :key="key" :id="key">
          <view class="goods-list-title">{{ sortMap[key] }}</view>
          <view
            v-for="item in val"
            :key="item.id"
            class="goods-list-item">
            <image class="goods-list-img" src="/static/tea.jpg" mode="aspectFill" />
            <view class="goods-list-content">
              <view class="goods-list-content_title">(大杯)芒果酸奶绿</view>
              <view class="goods-list-content_intro">甜酸细腻的芒果肉果酱，覆盖醇厚的酸奶与清新可口的绿茶茶茶</view>
              <view></view>
              <view>
                <view><text></text></view>
                <view></view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeName: '推荐',
      sort: [
        { id: 1, name: '推荐' },
        { id: 2, name: '芒着想你' },
        { id: 3, name: '心动夏天' },
        { id: 4, name: '店长推荐' },
        { id: 5, name: '找醇茶' },
        { id: 6, name: '找好茶' },
        { id: 7, name: '找奶茶' },
        { id: 8, name: '找口感' },
        { id: 9, name: '找新鲜' }
      ],
      sortMap: {
        recommend: '推荐',
        missYou: '芒着想你'
      },
      goods: {
        recommend: [
          { id: 1, name: '(中杯)波霸奶茶' },
          { id: 2, name: '(中杯)百香奶青+珍波椰' },
          { id: 3, name: '(大杯)百香奶青+珍波椰' },
          { id: 4, name: '(中杯)波霸奶绿' },
          { id: 5, name: '(大杯)奶茶' },
          { id: 6, name: '(大杯)波霸奶茶' },
          { id: 7, name: '(中杯)四季奶青' },
          { id: 8, name: '(大杯)四季奶青' },
          { id: 9, name: '(大杯)波霸奶绿' },
          { id: 10, name: '(中杯)茶冻奶绿' },
        ],
        missYou: [
          { id: 1, name: '(大杯)芒果酸奶绿' },
          { id: 2, name: '(中杯)芒果酸奶绿' },
          { id: 3, name: '(大杯)云朵芒果青' },
          { id: 4, name: '(中杯)云朵芒果青' },
          { id: 5, name: '(大杯)茶冻芒果青' },
          { id: 6, name: '(中杯)茶冻芒果青' },
          { id: 7, name: '(大杯)芒果青' },
          { id: 8, name: '(中杯)芒果青' }
        ]
      },
      scrollIntoView: '',
    }
  },
  methods: {
    sortClick(item) {
      this.activeName = item.name
      this.scrollIntoView = this.$util.keyvalExchange(this.sortMap)[item.name]
    }
  }
}
</script>

<style lang="scss" scoped>
$listHeight: calc(100vh - 44px);
$leftWidth: 100px;
.sortlist {
  display: flex;
  height: $listHeight;
  background-color: $bgColor;
  font-size: 16px;
}
.sort-list {
  width: $leftWidth;
  &-item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 15px;
    margin-bottom: 5px;
    color: $secondary;
    &:last-child {
      margin-bottom: 0;
    }
    &.active {
      background-color: #FFFFFF;
      color: #000000;
    }
  }
}
.goods-list {
  flex: 1;
  background-color: #FFFFFF;
  &-title {
    padding: 15px;
  }
  &-item {
    display: flex;
    margin-bottom: 30px;
    padding: 0 10px;
  }
  &-img {
    width: 80px;
    height: 80px;
    border-radius: 6px;
  }
  &-content {
    flex: 1;
    padding: 0 10px;
    &_title {
      margin-bottom: 5px;
      color: #000000;
    }
    &_intro {
      color: #333333;
      font-size: 12px;
      line-height: 1.2;
    }
  }
}
.scroll-view {
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
