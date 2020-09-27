<template>
  <view :style="[navigationBar]">
    <my-navigation-bar title="关于" color="#FFFFFF" :bgColor="lgTheme" />
    <view :style="[fullPageNoTab]" class="container">
      <view>麦尤尼 UI（my-uni-app），一个基于 uni-app 开发的 UI 组件库，名字的由来也正因于此，是作者用来记录工作学习过程中的收获以及成果展示。</view>
      <view>下面分几部分对其进行介绍：</view>
      <view>设计</view>
      <view>麦尤尼 UI 的色调决定完全源自于一张图，就是下面这张：</view>
      <image class="image" src="/static/basic.jpg" mode="aspectFill"></image>
      <view>同时也观察了几个 UI 组件库和其他 App 的 UI 设计，好看的 App 为什么好看，自然也在心中有了答案。</view>
      <view>从上方提供的图片可以看出，本项目的主题色取于图片的背景色，从上到下，从“紫色”到“粉色”的渐变，再者，项目的“黄色”取于图中主人公帽子间的颜色，至此，项目的所有主色调就基本确定了下来。</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 15px;
}
.image {
  display: block;
  margin: 0 auto;
}
</style>
