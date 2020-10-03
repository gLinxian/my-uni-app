<template>
  <view class="doc-container">
    <view class="doc-intro">重写 picker 选择器，使其在 iOS 和 Android 能有统一的样式，并一并封装普通选择器、多列选择器、时间选择器、日期选择器、日期时间选择器和省市区选择器。</view>
  
    <view class="doc-row">
      <view class="doc-title">省市区选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDefault" size="mini" @click="handleClick('region')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1_1 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">日期时间选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnSuccess" size="mini" @click="handleClick('dateTime')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">日期选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnWarning" size="mini" @click="handleClick('date')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">时间选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDanger" size="mini" @click="handleClick('time')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code4 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">多列选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnInfo" size="mini" @click="handleClick('multiSelector')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code5 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">单列选择器</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button :bgColor="$config.btnDefault" size="mini" @click="handleClick('selector')">演 示</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code6 }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">文档</view>
      <scroll-view class="table" :scroll-x="true">
        <view class="thead">
          <view class="tr">
            <view class="th">属性</view>
            <view class="th">说明</view>
          </view>
        </view>
        <view class="tbody">
          <view class="tr">
            <view class="td">type</view>
            <view class="td">选择器类型（region | dateTime | date | time | multiSelector | selector）</view>
          </view>
          <view class="tr">
            <view class="td">range</view>
            <view class="td">选择器数据</view>
          </view>
          <view class="tr">
            <view class="td">rangeKey</view>
            <view class="td">选择器外显属性的 key</view>
          </view>
          <view class="tr">
            <view class="td">color</view>
            <view class="td">设置颜色</view>
          </view>
          <view class="tr">
            <view class="td">disabled</view>
            <view class="td">是否禁用</view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <my-picker ref="region" type="region" @change="pickerChange" />
    <my-picker ref="dateTime" type="dateTime" @change="pickerChange" />
    <my-picker ref="date" type="date" @change="pickerChange" />
    <my-picker ref="time" type="time" @change="pickerChange" />
    <my-picker ref="multiSelector" type="multiSelector" :range="multiRange" @change="pickerChange" />
    <my-picker ref="selector" type="selector" :range="range" range-key="name" @change="pickerChange" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      multiRange: [
        ['亚洲', '欧洲'],
        ['中国', '日本'],
        ['北京', '上海', '广州']
      ],
      range: [
        { name: '中国' },
        { name: '美国' }, 
        { name: '巴西' }, 
        { name: '日本' }
      ],
      code1:
`<my-picker
  ref="picker"
  type="region"
  @change="pickerChange" />`,
      code1_1:
`methods: {
  handleClick() {
    this.$refs.picker.open()
  },
  pickerChange(e) {
    console.log(e.data)
  }
}`,
      code2:
`<my-picker
  ref="picker"
  type="dateTime"
  @change="pickerChange" />`,
      code3:
`<my-picker
  ref="picker"
  type="date"
  @change="pickerChange" />`,
      code4:
`<my-picker
  ref="picker"
  type="time"
  @change="pickerChange" />`,
      code5:
`<my-picker
  ref="picker"
  type="multiSelector"
  @change="pickerChange" />`,
      code6:
`<my-picker
  ref="picker"
  type="selector"
  @change="pickerChange" />`
    }
  },
  methods: {
    handleClick(type) {
      this.type = type
      setTimeout(() => {
        this.$refs[type].open()
      }, 150)
    },
    pickerChange(e) {
      // console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 620px !important;
}
</style>
