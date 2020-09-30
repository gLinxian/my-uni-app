<template>
  <view class="doc-container">
  
    <view class="doc-row">
      <view class="doc-title">图标按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button type="primary" icon="appreciatefill">按 钮</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code1 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">图标后置</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button type="primary" suffix-icon="appreciatefill">按 钮</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code2 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">圆角按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button type="primary" icon="appreciatefill" round>按 钮</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code3 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">圆形按钮</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button type="primary" icon="appreciatefill" circle></my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code4 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">颜色</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button bgColor="#687CD5" icon="appreciatefill">按 钮</my-button>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ code5 }}</text>
        </scroll-view>
      </view>
    </view>
  
    <view class="doc-row">
      <view class="doc-title">渐变</view>
      <view class="flex justify-center w-100 pt-50 pb-50">
        <my-button bgColor="linear-gradient(45deg, #687CD5, #DFA3D6)" icon="appreciatefill">按 钮</my-button>
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
            <view class="td">icon</view>
            <view class="td">图标</view>
          </view>
          <view class="tr">
            <view class="td">suffixIcon</view>
            <view class="td">后置图标</view>
          </view>
          <view class="tr">
            <view class="td">round</view>
            <view class="td">圆角按钮</view>
          </view>
          <view class="tr">
            <view class="td">circle</view>
            <view class="td">圆形按钮</view>
          </view>
          <view class="tr">
            <view class="td">bgColor</view>
            <view class="td">按钮颜色</view>
          </view>
          <view class="tr">
            <view class="td">size</view>
            <view class="td">按钮大小（default | mini）</view>
          </view>
          <view class="tr">
            <view class="td">type</view>
            <view class="td">按钮类型（primary | default | warn）</view>
          </view>
          <view class="tr">
            <view class="td">plain</view>
            <view class="td">是否镂空</view>
          </view>
          <view class="tr">
            <view class="td">disabled</view>
            <view class="td">是否禁用</view>
          </view>
          <view class="tr">
            <view class="td">loading</view>
            <view class="td">是否 loading</view>
          </view>
          <view class="tr">
            <view class="td">hoverClass</view>
            <view class="td">点击的样式类</view>
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
      code1:
`<my-button
  type="primary"
  icon="appreciatefill"
>按 钮</my-button>`,
      code2:
`<my-button
  type="primary"
  suffix-icon="appreciatefill"
>按 钮</my-button>`,
      code3:
`<my-button
  type="primary"
  icon="appreciatefill"
  round
>按 钮</my-button>`,
      code4:
`<my-button
  type="primary"
  circle
></my-button>`,
      code5:
`<my-button
  bgColor="#687CD5"
  icon="appreciatefill"
>按 钮</my-button>`,
      code6:
`<my-button
  bgColor="linear-gradient(45deg, #687CD5, #DFA3D6)"
  icon="appreciatefill"
>按 钮</my-button>`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';

/* 表格宽度 */
.tr {
  min-width: 400px;
}

/* 第一列宽度  */
.th:first-child,
.td:first-child {
  min-width: 110px;
}  
</style>

