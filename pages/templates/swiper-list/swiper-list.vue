<template>
  <view class="swiperlist">
    <my-tabs v-model="swiperCurrent" :items="tabs" color="#E54A45" />
    <swiper class="swiper" :current="swiperCurrent" @change="swiperChange">
      <swiper-item>
        <recommend />
      </swiper-item>
      <swiper-item>
        <nba />
      </swiper-item>
      <swiper-item>
        <follow />
      </swiper-item>
      <swiper-item>
        <cba />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import Recommend from './components/recommend'
import Nba from './components/nba'
import Follow from './components/follow'
import Cba from './components/cba'
export default {
  components: {
    Recommend,
    Nba,
    Follow,
    Cba
  },

  data() {
    return {
      swiperCurrent: 0,
      tabs: [
        { id: 1, name: '推荐' },
        { id: 2, name: 'NBA' },
        { id: 3, name: '关注' },
        { id: 4, name: 'CBA' }
      ]
    }
  },

  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.detail.current
    }
  }
}
</script>

<style lang="scss" scoped>
$swiperHeight: calc(100vh - 46px);

.swiperlist {
  background-color: $bgColor;
}

.swiper {
  height: $swiperHeight;
}
</style>
