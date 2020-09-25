<template>
  <view class="doc-container">
    <view class="doc-intro">使用内置的 css 类，通过组合来快速实现想要的样式效果，而不用费尽心思去为样式取名，一句样式也根本不需要取名。</view>
    
    <view class="doc-row">
      <view class="doc-title">示例：Flex 布局</view>
      <view class="flex flex-column w-100">
        <view class="flex justify-center align-center h-px-100 bg-light-default default">flex center</view>
        <view class="flex">
          <view class="w-px-100 pt-50 pb-50 bg-light-success success text-center">w-px-100</view>
          <view class="flex-1 pt-50 pb-50 bg-light-warning warning text-center">flex-1</view>
        </view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view :scroll-x="true">
          <text class="doc-code-text" space="nbsp">{{ flex }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">示例：居中</view>
      <view class="relative w-100 h-px-100 bg-light-default">
        <view class="absolute margin-ceter w-px-50 h-px-25 default text-center">居中</view>
      </view>
      <view class="relative w-100 h-px-100 bg-light-success">
        <view class="absolute transform-horizontal success">水平居中</view>
      </view>
      <view class="relative w-100 h-px-100 bg-light-warning">
        <view class="absolute transform-vertical warning">垂直居中</view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view class="w-100" :scroll-x="true">
          <text class="inline-block" space="nbsp" style="width: 550px;">{{ center }}</text>
        </scroll-view>
      </view>
    </view>

    <view class="doc-row">
      <view class="doc-title">示例：文本省略</view>
      <view class="w-100 p-15 bg-light-default">
        <view class="default text-line-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident voluptatem aperiam sint et? Magnam eius ea ducimus hic cumque et, dignissimos reprehenderit in ipsam accusamus nihil soluta fuga nam?</view>
      </view>
      <view class="w-100 p-15 bg-light-success">
        <view class="success text-line-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloribus sunt ullam doloremque ratione quaerat, laudantium dignissimos quas sed assumenda incidunt rerum esse aperiam vitae mollitia velit! Quidem, fuga. Voluptates.</view>
      </view>
      <view class="w-100 p-15 bg-light-warning">
        <view class="warning text-line-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, dignissimos aut nesciunt consectetur dolores veniam ut repellat corrupti perferendis. Eveniet architecto ipsa fugit doloribus perferendis dolore tempore sed unde recusandae?</view>
      </view>
      <view class="doc-code">
        <text class="doc-code-type">template</text>
        <scroll-view class="w-100" :scroll-x="true">
          <text class="inline-block" space="nbsp">{{ text }}</text>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      flex:
`<!-- 其他样式代码省略 -->
<view class="flex flex-column">
  <view class="flex justify-center align-center">flex center</view>
  <view class="flex">
    <view class="w-px-100">w-px-100</view>
    <view class="flex-1">flex-1</view>
  </view>
</view>`,
      center:
`<!-- 其他样式代码省略 -->
<view class="relative">
  <view class="absolute margin-ceter w-px-50 h-px-25">居中</view>
</view>
<view class="relative">
  <view class="absolute transform-horizontal">水平居中</view>
</view>
<view class="relative">
  <view class="absolute transform-vertical">垂直居中</view>
</view>`,
      text:
`<!-- 超过1行省略 -->
<text class="text-line-1"></text>

<!-- 超过2行省略 -->
<text class="text-line-2"></text>

<!-- 超过3行省略 -->
<text class="text-line-3"></text>`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/doc.scss';
</style>
