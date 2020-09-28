<template>
  <view class="container">
    <view :style="{ position: 'relative', height: parentHeight }" class="waterfall">
      <view v-for="item in list" :key="item.id" :style="{ position: 'absolute', top: item.top, left: item.left }" class="water-container">
        <view class="water">
          <image class="water-img" :src="item.img" mode="aspectFill"></image>
          <view class="water-content">
            <view class="mb-10 fs-14 text-line-2">{{ item.title }}</view>
            <view class="flex justify-space-between align-center">
              <text v-if="item.discount" class="red fs-10">¥<text class="fs-14">{{ item.discount }}</text></text>
              <text v-else class="red fs-10">¥<text class="fs-14">{{ item.price }}</text></text>
              <text class="btn">看相似</text>
            </view>
            <view v-if="item.discount" class="mt-10 fs-10 text-line-through">¥{{ item.price }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import waterfall from '@/mixins/waterfall.js'
export default {
  mixins: [waterfall],
  data() {
    return {
      list: [
        { id: 1, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', discount: '30.00', img: '/static/water1.jpg' },
        { id: 2, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', img: '/static/water2.jpg'  },
        { id: 3, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', img: '/static/water4.jpg'  },
        { id: 4, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', img: '/static/water3.jpg'  },
        { id: 5, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', discount: '30.00', img: '/static/water2.jpg'  },
        { id: 6, title: '蓝月亮深层洁净洗衣液4斤套装：薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1薰衣草1kg*1', price: '31.80', discount: '30.00', img: '/static/water5.jpg'  }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
$height: calc(100vh - 44px);

/**
 * -container 是为了营造好看的边距多写出来的类
 */
.container {
  box-sizing: border-box;
  width: 100%;
  min-height: $height;
  padding: 5px;
  background-color: $bgColor;
}
.waterfall {
  width: 100%;
}

.water-container {
  box-sizing: border-box;
  width: 50%;
  padding: 5px;
}
.water {
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  &-img {
    width: 100%;
  }
  &-content {
    padding: 5px 10px;
  }
}

.btn {
  padding: 2px 8px;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  color: $secondary;
  font-size: 10px;
}
</style>
