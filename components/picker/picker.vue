<template>
  <view>
    <!-- 时间选择器 -->
    <picker
      v-if="type === 'time'"
      mode="time"
      :value="value"
      @change="change"
      @cancel="cancel">
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
      @change="change"
      @cancel="cancel">
      <slot></slot>
    </picker>

    <!-- 时间日期选择器 -->
    <picker
      v-if="type === 'dateTime'"
      mode="multiSelector"
      :range="dateTimeRange"
      :value="value"
      @change="change"
      @cancel="cancel">
      <slot></slot>
    </picker>

    <!-- 省市区选择器 -->
    <view v-if="type === 'region'"></view>
  </view>
</template>

<script>
export default {
  name: 'MyPicker',
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
        console.log(
          this.getDateTimeRange(this.isUnit, '年', '月', '日', '时', '分')
        )
        return this.getDateTimeRange(this.isUnit, '年', '月', '日', '时', '分')
      }
    }
  },
  methods: {
    change(e) {
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
      this.$emit('change', e.detail.value)
    },
    cancel() {
      this.$emit('cancel')
    },
    /**
     * 获取 mode = date 的 picker 的三个属性值：value、start、end
     *
     * @param {String} fields 日期选择器的粒度
     * @param {String} type start 还是 end
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
     * @param {Number} start 开始值
     * @param {Number} end 结束值
     * @param {Boolean} isUnit 是否使用单位
     * @param {String} unit 单位
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
     * @param {String} params 单位，可以多个，顺序传入
     */
    getDateTimeRange(isUnit, ...params) {
      const result = []
      params.forEach(item => {
        switch (item) {
          case '年':
            const nowYear = new Date().getFullYear()
            result.push(
              this.getRangeArray(nowYear - 50, nowYear + 50, isUnit, '年')
            )
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
