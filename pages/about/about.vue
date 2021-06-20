<template>
  <view :style="[tabBar]" class="bg-bgColor">
    <my-navigation-bar :bgColor="$config.lgTheme" :opacity="opacity" title="关于" color="#FFFFFF" />
    <view :style="[fullPageNoNav]">
      <view class="header">
        <view class="avatar">
          <image class="avatar-img" :src="avatarUrl" mode="aspectFill"></image>
        </view>
        <view class="relative">
          <text>{{ nickName }}</text>
          <button class="absolute top left w-100 h-100 opacity-0" @click="getUserProfile"></button>
        </view>
      </view>
      <view class="p-15">
        <view class="list">
          <view
            v-for="(item, index) in list"
            :key="index"
            class="item relative"
            hover-class="item-hover"
            @click="itemClick(item.en)">
            <text class="item-icon" :class="item.icon"></text>
            <view class="item-body">
              <text>{{ item.cn }}</text>
              <text class="icon-right placeholder"></text>
            </view>
            <button v-if="item.type" class="absolute w-100 h-100 opacity-0" :open-type="item.type"></button>
          </view>
        </view>
      </view>
    </view>
    <my-tab-bar />
  </view>
</template>

<script>
import transparentTitle from '@/mixins/transparent-title.js'
export default {
  mixins: [transparentTitle],

  data() {
    return {
      avatarUrl: '/static/default.jpg',
      nickName: '登录/注册',
      list: [
        { cn: '关于', en: 'about', icon: 'icon-myfill' },
        { cn: '日志', en: 'log', icon: 'icon-text' },
        { cn: '分享', en: 'share', icon: 'icon-share', type: 'share' },
        { cn: '反馈', en: 'feedback', icon: 'icon-commentfill', type: 'feedback' }
      ]
    }
  },

  onShareAppMessage() {
    
  },

  methods: {
    itemClick(url) {
      if (
        url === 'about' ||
        url === 'log'
      ) this.$uni.navigateTo(`./${url}/${url}`)
    },

    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      uni.getUserProfile({
        desc: '欢迎使用麦尤尼 UI', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.avatarUrl = res.userInfo.avatarUrl
          this.nickName = res.userInfo.nickName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 240px;
  background: linear-gradient(to bottom, #687CD5, #DFA3D6);
  color: $white;
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 15px 0;
  padding: 2px;
  border: 1px solid $white;
  border-radius: 50%;

  &-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.list {
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
}

.item {
  display: flex;
  align-items: center;

  &-hover {
    background-color: #F5F5F5;
  }

  &-icon {
    margin: 0 15px;
    padding: 6px;
    border-radius: 50%;
    background-color: #FEFAE1;
    color: #F1C643;
    line-height: 1;
  }

  &-body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 0;
    border-bottom: .5px solid #F5F5F5;
    color: $secondary;
  }
}
</style>
