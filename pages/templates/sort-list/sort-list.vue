<template>
  <view class="sortlist">

    <!-- 分类 -->
    <view class="sort-list">
      <scroll-view class="scroll-view" :scroll-y="true">
        <view
          v-for="item in sort"
          :key="item.id"
          class="sort-list-item"
          :class="{ active: activeName === item.name }"
          @click="sortClick(item.name)">{{ item.name }}</view>
      </scroll-view>
    </view>

    <!-- 商品 -->
    <view class="goods-list">
      <scroll-view class="scroll-view" :scroll-y="true" :scroll-into-view="scrollIntoView" @scroll="goodsScroll">
        <view v-for="(goods, sort) in goodsMap" :key="sort" :id="sort">
          <view class="goods-list-title">{{ sortMap[sort] }}</view>
          <view class="goods-list-item" v-for="item in goods" :key="item.id">
            <image class="goods-list-img" src="/static/tea.jpg" mode="aspectFill" />
            <view class="goods-list-content">
              <view class="goods-list-content_title text-line-1">{{ item.name }}</view>
              <view class="goods-list-content_intro text-line-2">甜酸细腻的芒果肉果酱，覆盖醇厚的酸奶与清新可口的绿茶茶茶</view>
              <view class="mb-5 secondary fs-12">月售9</view>
              <view class="flex justify-space-between">
                <view>
                  <text class="red fs-10">¥</text>
                  <text class="red fs-16 mr-5">13</text>
                  <text class="secondary fs-12">起</text>
                </view>
                <view class="goods-list-content_btn">选规格</view>
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
      scrollIntoView: '',
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
        missYou: '芒着想你',
        beckoning: '心动夏天',
        shopowner: '店长推荐'
      },
      goodsMap: {
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
        ],
        beckoning: [
          { id: 1, name: '(大杯)芒果酸奶绿' },
          { id: 2, name: '(中杯)芒果酸奶绿' }
        ],
        shopowner: [
          { id: 1, name: '(大杯)芒果酸奶绿' },
          { id: 2, name: '(中杯)芒果酸奶绿' },
          { id: 3, name: '(大杯)云朵芒果青' },
          { id: 4, name: '(中杯)云朵芒果青' },
          { id: 5, name: '(大杯)茶冻芒果青' },
          { id: 6, name: '(中杯)茶冻芒果青' }
        ]
      }
    }
  },
  methods: {
    sortClick(name) {
      this.activeName = name
      this.scrollIntoView = this.$util.keyvalExchange(this.sortMap)[name]
    },
    goodsScroll(e) {
      const scrollTop = e.detail.scrollTop

      if (0 <= scrollTop && scrollTop < 1381) {

        this.activeName = '推荐'

      } else if (1381 <= scrollTop && scrollTop < 2496) {

        this.activeName = '芒着想你'

      } else if (2496 <= scrollTop && scrollTop < 2813) {

        this.activeName = '心动夏天'

      } else if (2813 <= scrollTop) {

        this.activeName = '店长推荐'

      }
    }
  }
}
</script>

<style lang="scss" scoped>
$listHeight: calc(100vh - 44px);
$leftWidth: 90px;

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
    padding: 15px 0 15px 10px;
    margin-bottom: 5px;
    color: $secondary;
    font-size: 14px;
    &:last-child {
      margin-bottom: 0;
    }
    &.active {
      border-left: 5px solid #FBD63D;
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
    width: 100px;
    height: 100px;
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
      margin-bottom: 5px;
      color: $general;
      font-size: 12px;
      line-height: 1.2;
    }
    &_btn {
      border-radius: 5px;
      background-image: linear-gradient(45deg, #FBD63D, #F8BE2C);
      padding: 5px 7px;
      color: #000000;
      font-size: 12px;
      line-height: 1;
    }
  }
}
.scroll-view {
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
