<template>
  <view class="my-container">
    <view class="row">
      <view class="col-4 item" v-for="(item, index) in icons" :key="index" hover-class="item-hover">
        <text :class="item.name"></text>
        <text>{{ item.name | name }}</text>
      </view>
    </view>
    <view class="my-code">
      <text class="my-code-type">template</text>
      <scroll-view class="w-100" :scroll-x="true">
        <text class="inline-block" space="nbsp">{{ icon }}</text>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  filters: {
    name(str) {
      return str.split('-')[1]
    }
  },
  data() {
    return {
      icons: [
        { name: 'icon-settings' },
        { name: 'icon-subscription' },
        { name: 'icon-question' },
        { name: 'icon-form' },
        { name: 'icon-pic' },
        { name: 'icon-filter' },
        { name: 'icon-footprint' },
        { name: 'icon-top' },
        { name: 'icon-right' },
        { name: 'icon-refresh' },
        { name: 'icon-refund' },
        { name: 'icon-cart' },
        { name: 'icon-remind' },
        { name: 'icon-delete' },
        { name: 'icon-profile' },
        { name: 'icon-home' },
        { name: 'icon-message' },
        { name: 'icon-link' },
        { name: 'icon-lock' },
        { name: 'icon-unlock' },
        { name: 'icon-vip' },
        { name: 'icon-weibo' },
        { name: 'icon-activity' },
        { name: 'icon-big' },
        { name: 'icon-friend' },
        { name: 'icon-goods' },
        { name: 'icon-selection' },
        { name: 'icon-tmall' },
        { name: 'icon-explore' },
        { name: 'icon-present' },
        { name: 'icon-square' },
        { name: 'icon-round' },
        { name: 'icon-add' },
        { name: 'icon-fold' },
        { name: 'icon-game' },
        { name: 'icon-redpacket' },
        { name: 'icon-similar' },
        { name: 'icon-info' },
        { name: 'icon-tao' },
        { name: 'icon-forward' },
        { name: 'icon-furniture' },
        { name: 'icon-recharge' },
        { name: 'icon-dress' },
        { name: 'icon-vipcard' },
        { name: 'icon-coffee' },
        { name: 'icon-voice' },
        { name: 'icon-sports' },
        { name: 'icon-wifi' },
        { name: 'icon-share' },
        { name: 'icon-we' },
        { name: 'icon-light' },
        { name: 'icon-pick' },
        { name: 'icon-service' },
        { name: 'icon-sort' },
        { name: 'icon-1212' },
        { name: 'icon-down' },
        { name: 'icon-mobile' },
        { name: 'icon-copy' },
        { name: 'icon-countdown' },
        { name: 'icon-notice' },
        { name: 'icon-qiang' },
        { name: 'icon-upstage' },
        { name: 'icon-baby' },
        { name: 'icon-brand' },
        { name: 'icon-choiceness' },
        { name: 'icon-clothes' },
        { name: 'icon-creative' },
        { name: 'icon-female' },
        { name: 'icon-keyboard' },
        { name: 'icon-male' },
        { name: 'icon-new' },
        { name: 'icon-rank' },
        { name: 'icon-bad' },
        { name: 'icon-living' },
        { name: 'icon-focus' },
        { name: 'icon-apps' },
        { name: 'icon-xiaoheiqun' },
        { name: 'icon-auction' },
        { name: 'icon-paint' },
        { name: 'icon-return' },
        { name: 'icon-mark' },
        { name: 'icon-at' },
        { name: 'icon-repeal' },
        { name: 'icon-album' },
        { name: 'icon-people' },
        { name: 'icon-repair' },
        { name: 'icon-file' },
        { name: 'icon-taoxiaopu' },
        { name: 'icon-attention' },
        { name: 'icon-command' },
        { name: 'icon-community' },
        { name: 'icon-read' },
        { name: 'icon-calendar' }
      ],
      icon: `<text class="icon-calendar"></text>`
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  border-top: 1px solid #F5F5F5;
  border-right: 1px solid #F5F5F5;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-left: 1px solid #F5F5F5;
  border-bottom: 1px solid #F5F5F5;
  padding: 20px 0;
  transition: all .3s;
  &:hover {
    background-color: $bgColor;
  }
  & > text:first-child {
    font-size: 24px;
    margin-bottom: 10px;
  }
  & > text:last-child {
    font-size: 12px;
  }
}
</style>
