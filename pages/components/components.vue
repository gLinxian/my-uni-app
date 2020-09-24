<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="组件" color="#FFFFFF" :bgColor="lgTheme"/>
    <view>
      <view v-for="item in 40" :key="item">组件</view>
    </view>
    <my-tab-bar/>
  </view>
</template>
