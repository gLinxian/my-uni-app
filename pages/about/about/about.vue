<template>
  <view :style="[navigationBar]">
    <my-navigation-bar back title="关于" color="#FFFFFF" :border="false" :bgColor="lgTheme" />
    <view :style="[fullPageNoTab]" class="container">
      <view class="mb-10">
        <view class="primary">麦尤尼 UI（my-uni-app UI），一个基于<br /> uni-app 开发的 UI 组件库，名字的由来也源于此，她是作者用来记录工作学习过程中的收获以及成果展示。下面分几部分对其进行介绍。</view>
      </view>
      <view class="mb-10">
        <view class="primary fw-600">设计</view>
        <view class="text-indent-2">麦尤尼 UI 的色调决定完全源自于一张图（下面这张）</view>
        <image class="img" src="/static/basic.jpg" mode="aspectFill"></image>
        <view>同时也观察了几个 UI 组件库和其他 App 的 UI 设计，好看的 App 为什么好看，自然也在心中有了答案。</view>
        <view class="text-indent-2">从上方提供的图片可以看出，本项目的主题色取于图片的背景色，从上到下“紫色”到“粉色”的渐变，加上取于图中主人公（《家庭教师》中的人物，名为尤尼）帽子点缀的颜色“黄色”，项目的主色调也就基本确定了下来。</view>
        <view class="text-indent-2">UI 的好看与否，在于颜色的搭配与呼应，从本项目的 UI 看来，应该基本做到了这一点。例如，每个模块都采用了刚才确定的主题色，也从上方到下方，都有使用相近颜色的图片做呼应。在“关于”模块中，“浅黄色”就是取于主人公的肤色。</view>
      </view>
      <view class="mb-10">
        <view class="primary fw-600">基础</view>
        <view class="text-indent-2">作者在工作过程中也经常用到“基础”模块中的东西。比如用到了训多内置的 css 类，这样就能快速的实现自己想要的样式，而且偶尔还能用于测试样式，测试样式是否正确等。</view>
        <view class="text-indent-2">该模块中对 uni 提供的 api 进行的封装也非常有用，书写不但非常节约，代码看上去也非常美观，因为省去了很多用于换行的括号。同样的，工具函数也是开发中的利器，同时也是必不可少的。</view>
        <view class="text-indent-2">开发过程中，建议对颜色进行变量存储，这样修改的时候可以集中修改，非常方便，这也是实现快速更换主题的前提。</view>
      </view>
      <view class="mb-10">
        <view class="primary fw-600">组件</view>
        <view class="text-indent-2">本项目中的所有组件，都是作者在工作过程中对开发的思考，对不足的补充，所以不会去重复开发一些市面上已有的组件。另外，也有的是作者在上网过程中学习到一些好的组件并将之改进改为 vue 组件的形式。</view>
        <view class="text-indent-2">这里，在开发过程中较为基础的组件建议直接使用 uni UI 的组件（传说是全网性能最好的组件 φ(❐_❐✧ ）。为什么推荐，原因是因为它有些确实写得比较不错，大家可以自己斟酌选择使用，同时最重要的一点是，官方提供的 uni UI 的组件支持 nvue ，这样对追求原生性能的开发者有极大的便利。</view>
      </view>
      <view class="mb-10">
        <view class="primary fw-600">模板</view>
        <view class="text-indent-2">模板是开发中经常碰到的一些需求形式，比如本项目中列有的表单、左右滑动列表和瀑布流等等。因为它不便于封装成组件，但又有组件的特点，所以最后只能把它写成一段基础的代码，用于之后的复制粘贴扩展。</view>
      </view>
      <view class="mb-10">
        <view class="primary fw-600">联系</view>
        <view @click="emailClick">linxian52dt@163.com</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    emailClick() {
      uni.setClipboardData({
        data: 'linxian52dt@163.com'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 15px;
  color: $general;
  font-size: 16px;
  line-height: 2;
}
.img {
  display: block;
  margin: 15px auto;
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba($color: #000000, $alpha: .35);
}
</style>
