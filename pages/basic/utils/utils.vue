<template>
  <view>
    <view class="flex justify-center">
      <my-tabs v-model="tabIndex" :items="tabItems" style="width: 200px" />
    </view>
    <view class="my-container">
      <view v-show="tabIndex === 0">
        <view class="my-intro">使用 $config ，它包含有一些配置，将所有的配置写在同一个文件，方便修改，也可以实现其他功能，例如换肤。</view>
        <view class="my-code">
          <text class="my-code-type">js</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ confing }}</text>
          </scroll-view>
        </view>
        <view class="my-code">
          <text class="my-code-type">script</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ confing2 }}</text>
          </scroll-view>
        </view>
        <view class="my-code">
          <text class="my-code-type">template</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ confing3 }}</text>
          </scroll-view>
        </view>
      </view>

      <view v-show="tabIndex === 1">
        <view class="my-intro">使用 $uni ，它对常用的的 api 进行二次封装，主要目的是为了节约书写时的代码量。</view>
        <view class="my-code">
          <text class="my-code-type">script</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ uniApi }}</text>
          </scroll-view>
        </view>
        <view class="my-code">
          <text class="my-code-type">script</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ uniApi2 }}</text>
          </scroll-view>
        </view>
        <view class="my-code">
          <text class="my-code-type">script</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ uniApi3 }}</text>
          </scroll-view>
        </view>
      </view>

      <view v-show="tabIndex === 2">
        <view class="my-intro">使用 $util ，它是一些工具函数的集合，方便日常使用，例如数据校验、格式化日期等。</view>
        <view class="my-code">
          <text class="my-code-type">script</text>
          <scroll-view :scroll-x="true">
            <text class="my-code-text" space="nbsp">{{ util }}</text>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabItems: [
        { id: 1, name: '配置' },
        { id: 2, name: 'uni-api' },
        { id: 3, name: '函数' },
      ],
      confing:
`// 例如创建一个特定参数的请求对象
import { config } from '@/utils/config.js'

const $uni = new Request(config.baseUrlNoSys, config.keyNoSys, config.ivNoSys)`,
      confing2:
`// 调用接口的时候使用
uni.uploadFile({
  url: this.$config.baseUrl + this.$config.uploadImgUrl,
  filePath: filePath,
  name: 'file'
})`,
      confing3:
`// 在元素上使用
<my-tabs :color="$config.blue" />`,
      uniApi:
`/* 路由 */

// 保留当前页面，跳转到应用内的某个页面
this.$uni.navigateTo('../home/home')

// 携带参数
this.$uni.navigateTo(\`../detail/detail?id=\${id}\`)

// 关闭当前页面，返回上一页面或多级页面
this.$uni.navigateBack(1)

// 关闭当前页面，跳转到应用内的某个页面
this.$uni.redirectTo('../home/home')

// 关闭所有页面，打开到应用内的某个页面
this.$uni.reLaunch('../home/home')

// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
this.$uni.switchTab('../home/home')`,
      uniApi2:
`/* 提示框 */

// 使用
this.$uni.showToast('hello 麦尤尼')

// 设置时长
this.$uni.showToast('hello 麦尤尼', 1000)

// 其他参数
/**
 * 显示消息提示框
 * 
 * @param {String} title 显示消息
 * @param {Number} duration 显示时长
 * @param {Boolean} mask 是否带蒙层
 * @param {String} icon 自定义图标
 */
function showToast(title, duration = 1500, mask = true, icon = 'none') {
  uni.showToast({ title, duration, mask, icon })
}

// 保持代码对称
this.$uni.hideToast()`,
      uniApi3:
`/* Loading */

// 使用
this.$uni.showLoading()

// 其他参数
/**
 * 显示 loading 提示框
 * 
 * @param {String} title
 * @param {Boolean} mask
 */
function showLoading(title = '', mask = true) {
  uni.showLoading({ title, mask })
}

// 保持代码对称
this.$uni.hideLoading()`,
      util:
`/* 验证数字 */
this.$util.checkNum(1)
// true

/* 验证字母 */
this.$util.checkLetter('a')
// true

/* 验证字母或数字 */
this.$util.checkNumOrLetter('a')
// true

/* 验证中文 */
this.$util.checkChinese('麦尤尼')
// true

/* 验证中文或字母或数字 */
this.$util.checkChineseOrNumberOrLettter('麦尤尼')
// true

/* 验证邮箱 */
this.$util.checkEmail(this.form.email)
// false '邮箱格式不正确'

/* 验证手机号 */
this.$util.checkPhone(this.form.mobile)
// false '请输入正确的手机号'

/* 隐藏手机号中间四位 */
this.$util.hidePhoneMiddle(this.form.mobile)
// 123****6789

/* 交换对象的键值和键名 */
this.$util.keyvalExchange({ chinese: '中文' })
// { 中文: 'chinese' }

/* 拷贝一份副本 */
this.$util.copy({ name: '麦尤尼' })
// { name: '麦尤尼' }

/* 时间戳转日期格式 */
this.$util.parseTime(1599805206)
// 2020-09-11 14:20:06`
    }
  }
}
</script>

<style lang="scss" scoped>
.my-code {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
