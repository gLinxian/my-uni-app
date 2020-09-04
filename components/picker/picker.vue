<template>
  <view class="picker-container" :style="{ display: isShow }">
    <view class="mask" :style="{ opacity: maskOpacity }" @click="close('cancel')"></view>
    <view class="picker" :class="{ toggle: isToggle }">
      <view class="picker-header">
        <view class="picker-action cancel" @click="close('cancel')">取消</view>
        <view class="picker-action confirm" @click="close('confirm')">确定</view>
      </view>

      <!-- 时间选择器 -->
      <picker-view v-if="type === 'time'" class="picker-content" :value="value" @change="handleChange">
        <picker-view-column>
          <view class="picker-item" v-for="item in hours" :key="item">{{ item }}时</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in minutes" :key="item">{{ item }}分</view>
        </picker-view-column>
      </picker-view>

      <!-- 日期选择器 -->
      <picker-view v-if="type === 'date'" class="picker-content" :value="value" @change="handleChange">
        <picker-view-column>
          <view class="picker-item" v-for="item in years" :key="item">{{ item }}年</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in months" :key="item">{{ item }}月</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in days" :key="item">{{ item }}日</view>
        </picker-view-column>
      </picker-view>

      <!-- 日期时间选择器 -->
      <picker-view v-if="type === 'dateTime'" class="picker-content" :value="value" @change="handleChange">
        <picker-view-column>
          <view class="picker-item" v-for="item in years" :key="item">{{ item }}年</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in months" :key="item">{{ item }}月</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in days" :key="item">{{ item }}日</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in hours" :key="item">{{ item }}时</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in minutes" :key="item">{{ item }}分</view>
        </picker-view-column>
      </picker-view>

      <!-- 省市区选择器 -->
      <picker-view v-if="type === 'region'" class="picker-content" :value="value" @change="handleChange">
        <picker-view-column>
          <view class="picker-item" v-for="item in provinces" :key="item.value">{{ item.label }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in citys" :key="item.value">{{ item.label }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="picker-item" v-for="item in districts" :key="item.value">{{ item.label }}</view>
        </picker-view-column>
      </picker-view>
    </view>
    <slot></slot>
  </view>
</template>

<script>
import provinceData from './data/province'
import cityData from './data/city'
import districtData from './data/district'
export default {
  name: 'MyPicker',
  props: {
    type: {
      type: String,
      default: 'region'
    }
  },
  data() {
    return {
      isShow: 'none',
      maskOpacity: 0,
      isToggle: false,
      provinces: provinceData,
      citys: [],
      districts: [],
      value: [],
      result: null
    }
  },
  computed: {
    hours() {
      const hours = []
      for (let i = 0; i < 24; i++) {
        hours.push(i < 10 ? `0${i}` : i )
      }
      return hours
    },
    minutes() {
      const minutes = []
      for (let i = 0; i < 60; i++) {
        minutes.push(i < 10 ? `0${i}` : i )
      }
      return minutes
    },
    years() {
      const years = []
      const year = new Date().getFullYear()
      for (let i = year - 50; i < year + 50; i++ ) {
        years.push(i)
      }
      return years
    },
    months() {
      const months = []
      for (let i = 1; i <= 12; i++) {
        months.push(i < 10 ? `0${i}` : i )
      }
      return months
    },
    days() {
      const days = []
      for (let i = 1; i <= 31; i++) {
        days.push(i < 10 ? `0${i}` : i )
      }
      return days
    }
  },
  created() {
    const now = new Date()

    if (this.type === 'time') {
      this.$set(this.value, 0, now.getHours())
      this.$set(this.value, 1, now.getMinutes())
    }

    if (this.type === 'date') {
      this.$set(this.value, 0, 50)
      this.$set(this.value, 1, now.getMonth())
      this.$set(this.value, 2, now.getDay() - 2)
    }

    if (this.type === 'dateTime') {
      this.$set(this.value, 0, 50)
      this.$set(this.value, 1, now.getMonth())
      this.$set(this.value, 2, now.getDay() - 2)
      this.$set(this.value, 3, now.getHours())
      this.$set(this.value, 4, now.getMinutes())
    }

    if (this.type === 'region') {
      this.value = [0, 0, 0]
      this.citys = cityData[0]
      this.districts = districtData[0][0]
    }
  },
  methods: {
    handleChange(e) {
      const value = e.detail.value
      if (this.type === 'time') {
        this.result = `${this.hours[value[0]]}:${this.minutes[value[1]]}`
      }
      
      if (this.type === 'date') {
        this.result = `${this.years[value[0]]}-${this.months[value[1]]}-${this.days[value[2]]}`
      }
      
      if (this.type === 'dateTime') {
        this.result = `${this.years[value[0]]}-${this.months[value[1]]}-${this.days[value[2]]} ${this.hours[value[3]]}:${this.minutes[value[4]]}`
      }
      
      if (this.type === 'region') {
        this.citys = cityData[value[0]]
        this.districts = districtData[value[0]][value[1]]
        this.result = `${this.provinces[value[0]].label}${this.citys[value[1]].label}${this.districts[value[2]].label}`
      }
    },
    open() {
      this.isShow = 'block'
      setTimeout(() => { this.maskOpacity = 1 }, 10)
      setTimeout(() => { this.isToggle = true }, 50)
    },
    close(type) {
      this.isToggle = false
      this.maskOpacity = 0
      setTimeout(() => { this.isShow = 'none' }, 150)

      if (type === 'cancel') {
        this.$emit('cancel')
      }

      if (type === 'confirm') {
        if (!this.result) {
          if (this.type === 'time') {
            this.result = `${this.hours[this.value[0]]}:${this.minutes[this.value[1]]}`
          }

          if (this.type === 'date') {
            this.result = `${this.years[this.value[0]]}-${this.months[this.value[1]]}-${this.days[this.value[2]]}`
          }

          if (this.type === 'dateTime') {
            this.result = `${this.years[this.value[0]]}-${this.months[this.value[1]]}-${this.days[this.value[2]]} ${this.hours[this.value[3]]}:${this.minutes[this.value[4]]}`
          }

          if (this.type === 'region') {
            this.result = `${this.provinces[this.value[0]].label}${this.citys[this.value[1]].label}${this.districts[this.value[2]].label}`
          }
        }

        this.$emit('change', this.result)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.picker-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  font-size: 16px;
}
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, .6);
  transition: opacity .25s;
}
.picker {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #EFEFF4;
  visibility: hidden;
  backface-visibility: hidden;
  transform: translateY(100%);
  transition: transform .3s, visibility .3s, -webkit-transform .3s;
  &.toggle {
    visibility: visible;
    transform: translate(0);
  }
  &-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: #FFFFFF;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      height: 1px;
      left: 0;
      border-bottom: 1px solid #E5E5E5;
      color: #E5E5E5;
      transform-origin: 0 100%;
      transform: scaleY(.5);
      clear: both;
    }
  }
  &-action {
    box-sizing: border-box;
    max-width: 50%;
    padding: 0 14px;
    font-size: 17px;
    line-height: 1;
    &.cancel {
      color: #888888;
    }
    &.confirm {
      color: #007AFF
    }
  }
  &-content {
    position: relative;
    width: 100%;
    height: 238px;
    background-color: #FFFFFF;
  }
  &-item {
    text-align: center;
    line-height: 34px;
  }
}
</style>
