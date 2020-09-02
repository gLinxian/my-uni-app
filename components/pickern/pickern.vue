<template>
  <view>
    <!-- 时间选择器 -->
    <picker
      v-if="type === 'time'"
      mode="time"
      :value="value"
      @change="pickerChange"
      @cancel="pickerCancel">
      <slot></slot>
    </picker>

    <!-- 日期选择器 -->
    <picker
      v-if="type === 'date'"
      mode="date"
      :value="value"
      :fields="fields"
      :start="dateStart"
      :end="dateEnd"
      @change="pickerChange"
      @cancel="pickerCancel">
      <slot></slot>
    </picker>

    <!-- 时间日期选择器 -->
    <picker
      v-if="type === 'dateTime'"
      mode="multiSelector"
      :range="dateTimeRange"
      :value="value"
      @change="pickerChange"
      @cancel="pickerCancel">
      <slot></slot>
    </picker>

    <!-- 省市区选择器 -->
    <picker 
      v-if="type === 'region'"
      mode="multiSelector"
      :range="regionRange"
      :range-key="'label'"
      :value="value"
      @columnchange="pickerColumnchange"
      @change="pickerChange"
      @cancel="pickerCancel">
      <slot></slot>
    </picker>
  </view>
</template>

<script>
import provinceData from './data/province'
import cityData from './data/city'
import districtData from './data/district'
export default {
  name: 'MyPickern',
  props: {
    type: {
      type: String,
      default: ''
    },
    fields: {
      type: String,
      default: 'day'
    },
    isUnit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      regionRange: [provinceData, cityData[0], districtData[0][0]],
      provinceIndex: 0
    }
  },
  computed: {
    value() {
      if (this.type === 'time') {
        const now = new Date()
        const nowHour = now.getHours()
        const nowMinute = now.getMinutes()
        return `${nowHour}:${nowMinute}`
      }
      if (this.type === 'date') {
        return this.getDate(this.fields)
      }
      if (this.type === 'dateTime') {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()
        const day = now.getDate()
        const hour = now.getHours()
        const minute = now.getMinutes()
        return [50, month, day - 1, hour, minute]
      }
      if (this.type === 'region') {
        return [0, 0 , 0]
      }
    },
    dateStart() {
      if (this.type === 'date') {
        return this.getDate(this.fields, 'start')
      }
    },
    dateEnd() {
      if (this.type === 'date') {
        return this.getDate(this.fields, 'end')
      }
    },
    dateTimeRange() {
      if (this.type === 'dateTime') {
        return this.getDateTimeRange(this.isUnit, '年', '月', '日', '时', '分')
      }
    }
  },
  methods: {
    pickerColumnchange(e) {
      const column = e.detail.column
      const value = e.detail.value
      this.$set(this.value, column, value)
      switch(column) {
        case 0:
          this.provinceIndex = value
          this.$set(this.regionRange, 1, cityData[value])
          this.$set(this.regionRange, 2, districtData[value][0])
          this.$set(this.value, 1, 0)
          this.$set(this.value, 2, 0)
          break
        case 1:
          this.$set(this.regionRange, 2, districtData[this.provinceIndex][value])
          this.$set(this.value, 2, 0)
          break
      }
    },
    pickerChange(e) {
      if (this.type === 'dateTime') {
        const value = e.detail.value
        const year = this.dateTimeRange[0][value[0]]
        const month = this.dateTimeRange[1][value[1]]
        const day = this.dateTimeRange[2][value[2]]
        const hour = this.dateTimeRange[3][value[3]]
        const minute = this.dateTimeRange[4][value[4]]
        const dateTime = this.isUnit
          ? `${year}${month}${day}${hour}${minute}`
          : `${year}-${month}-${day} ${hour}:${minute}`
        this.$emit('change', dateTime)
        return
      }
      if (this.type === 'region') {
        const value = e.detail.value
        const province = this.regionRange[0][value[0]]
        const city = this.regionRange[1][value[1]]
        const district = this.regionRange[2][value[2]]
        const region = {
          label: `${province.label}${city.label}${district.label}`,
          value: district.value,
          data: [province, city, district]
        }
        this.$emit('change', region)
        return
      }
      this.$emit('change', e.detail.value)
    },
    pickerCancel() {
      this.$emit('cancel')
    },

    /**
     * 得到 date picker 的三个属性值：value、start、end
     *
     * @param {String} fields 日期选择器的粒度
     * @param {String} type   start / end
     */
    getDate(fields = 'day', type) {
      const now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let day = now.getDate()
      let date
      if (type === 'start') {
        year = year - 60
      } else if (type === 'end') {
        year = year + 2
      }
      month = month > 9 ? month : '0' + month
      day = day > 9 ? day : '0' + day
      if (fields === 'day') {
        date = `${year}-${month}-${day}`
      } else if (fields === 'month') {
        date = `${year}-${month}`
      } else if (fields === 'year') {
        date = `${year}`
      }
      return date
    },

    /**
     * 得到一个范围数组
     *
     * @param {Number} start   开始值
     * @param {Number} end     结束值
     * @param {Boolean} isUnit 是否使用单位
     * @param {String} unit    单位
     */
    getRangeArray(start, end, isUnit = false, unit = '') {
      const unit_ = isUnit ? unit : ''
      const array = []
      for (let i = start; i <= end; i++) {
        if (i < 10) i = '0' + i
        array.push(i + unit_)
      }
      return array
    },

    /**
     * 得到 dateTime picker 的 range
     *
     * @param {Boolean} isUnit 开始值
     * @param {String} params  单位，可以多个，顺序传入
     */
    getDateTimeRange(isUnit, ...params) {
      const result = []
      params.forEach(item => {
        switch (item) {
          case '年':
            const nowYear = new Date().getFullYear()
            result.push(this.getRangeArray(nowYear - 50, nowYear + 50, isUnit, '年'))
            break
          case '月':
            result.push(this.getRangeArray(1, 12, isUnit, '月'))
            break
          case '日':
            result.push(this.getRangeArray(1, 31, isUnit, '日'))
            break
          case '时':
            result.push(this.getRangeArray(0, 23, isUnit, '时'))
            break
          case '分':
            result.push(this.getRangeArray(0, 59, isUnit, '分'))
            break
          case '秒':
            result.push(this.getRangeArray(0, 59, isUnit, '秒'))
            break
        }
      })
      return result
    }
  }
}
</script>
