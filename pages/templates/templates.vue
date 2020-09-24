<template>
  <view :style="[navigationBar, tabBar]">
    <my-navigation-bar title="模板" color="#FFFFFF" :bgColor="lgTheme"/>
    <view>
      <view v-for="item in 40" :key="item">模板</view>
    </view>
    <my-tab-bar/>
  </view>
</template>
