<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="关于" color="#FFFFFF" :bgColor="lgTheme"/>
    <view>
      <view v-for="item in 40" :key="item">关于</view>
    </view>
    <my-tab-bar/>
  </view>
</template>
