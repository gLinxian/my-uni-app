<template>
  <view class="wine">
    <!-- 表单 -->
    <view class="form">
      <view class="form-item">
        <text class="form-item-label">姓名</text>
        <input class="form-item-input" v-model="form.userName" type="text" placeholder="请填写姓名">
      </view>
      <view class="form-item">
        <text class="form-item-label">手机</text>
        <input class="form-item-input" v-model="form.mobile" type="text" placeholder="请填写手机">
        <my-button
          :disabled="codeDisabled"
          :bgColor="$config.lgTheme"
          hover-class="form-item-hover"
          size="mini"
          @click="codeClick">
          <text class="white">{{ code }}</text>
        </my-button>
      </view>
      <view class="form-item">
        <text class="form-item-label">验证码</text>
        <input class="form-item-input" v-model="form.code" type="text" placeholder="请填写验证码">
      </view>
      <view class="form-item">
        <text class="form-item-label">公司</text>
        <input class="form-item-input" v-model="form.company" type="text" placeholder="请填写公司">
      </view>
      <view class="form-item">
        <text class="form-item-label">职位</text>
        <input class="form-item-input" v-model="form.job" type="text" placeholder="请填写职位">
      </view>
      <view class="form-item">
        <text class="form-item-label">行业</text>
        <input class="form-item-input" v-model="form.industry" type="text" placeholder="请填写行业">
      </view>
      <view class="form-item">
        <text class="form-item-label">邮箱</text>
        <input class="form-item-input" v-model="form.email" type="text" placeholder="请填写邮箱">
      </view>
      <view class="form-item">
        <text class="form-item-label">所在地区</text>
        <view class="form-item-input" @click="regionClick">
          <text v-if="form.province">{{ form.province + form.city }}</text>
          <text v-else class="placeholder">请选择所在地区</text>
        </view>
      </view>
      <view class="form-item">
        <text class="form-item-label">证件选择</text>
        <picker
          class="form-item-input"
          mode="selector"
          :range="certTypeRange"
          @change="pickerChange($event, 'certType')"
          @cancel="pickerCancel('certType')">
          <text v-if="form.certType">{{ form.certType }}</text>
          <text v-else class="placeholder">请选择证件</text>
        </picker>
      </view>
      <view class="form-item">
        <text class="form-item-label">证件号码</text>
        <input class="form-item-input" v-model="form.certNo" type="text" placeholder="请填写证件号码">
      </view>
      <view class="form-item">
        <text class="form-item-label">公司性质</text>
        <picker
          class="form-item-input"
          mode="selector"
          :range="companyTypeRange"
          @change="pickerChange($event, 'companyType')"
          @cancel="pickerCancel('companyType')">
          <text v-if="form.companyType">{{ form.companyType }}</text>
          <text v-else class="placeholder">请选择公司性质</text>
        </picker>
      </view>
      <view class="form-item">
        <text class="form-item-label">感兴趣的葡萄酒原产国（多选）</text>
        <view class="form-item-input checkbox-group">
          <label
            class="checkbox-group_label"
            v-for="(item, index) in originOfInterestData"
            :key="item.id"
            :class="[item.checked ? 'checked' : 'unchecked']">
            <switch class="checkbox-group_checkbox" @change="switchChange($event, 'originOfInterest', index)" />
            <text>{{ item.text }}</text>
          </label>
        </view>
      </view>
      <view class="form-item">
        <text class="form-item-label">参观采购意向（多选）</text>
        <view class="form-item-input checkbox-group">
          <label
            class="checkbox-group_label"
            v-for="(item, index) in intentionData"
            :key="item.id"
            :class="[item.checked ? 'checked' : 'unchecked']">
            <switch class="checkbox-group_checkbox" @change="switchChange($event, 'intention', index)" />
            <text>{{ item.text }}</text>
          </label>
        </view>
      </view>
      <view class="form-item">
        <text class="form-item-label">获取信息来源（多选）</text>
        <view class="form-item-input checkbox-group">
          <label
            class="checkbox-group_label"
            v-for="(item, index) in infoResourceData"
            :key="item.id"
            :class="[item.checked ? 'checked' : 'unchecked']">
            <switch class="checkbox-group_checkbox" @change="switchChange($event, 'infoResource', index)" />
            <text>{{ item.text }}</text>
          </label>
        </view>
      </view>
      <view class="form-item">
        <my-button
          :bgColor="$config.lgTheme"
          class="form-item-button"
          hover-class="form-item-hover"
          @click="submitClick">提 交</my-button>
      </view>
    </view>
    
    <my-picker
      ref="myPicker"
      type="region"
      :color="$config.theme"
      @cancel="regionCancel"
      @change="regionChange" />
    <my-modal />
  </view>
</template>

<script>
export default {
  data() {
    return {
      /* 表单 */
      form: {
        userName: '',
        mobile: '',
        code: '',
        company: '',
        job: '',
        industry: '',
        email: '',
        province: '',
        city: '',
        certType: '',
        certNo: '',
        companyType: '',
        originOfInterest: '',
        intention: '',
        infoResource: ''
      },

      /* 验证码 */
      codeDisabled: false,
      code: '获取验证码',

      /* 证件 */
      certTypeRange: [
        '身份证',
        '护照',
        '回乡证'
      ],

      /* 公司性质 */
      companyTypeRange: [
        '酒庄',
        '进口商',
        '酒类经销商',
        '商超烟酒专卖',
        '酒类专卖',
        '行业媒体',
        '其他'
      ],

      /* 感兴趣的葡萄酒原产国 */
      originOfInterestData: [
        { id: 0, text: '法国', checked: false },
        { id: 1, text: '澳洲', checked: false },
        { id: 2, text: '西班牙', checked: false },
        { id: 3, text: '意大利', checked: false },
        { id: 4, text: '葡萄牙', checked: false },
        { id: 5, text: '德国', checked: false },
        { id: 6, text: '阿根廷', checked: false },
        { id: 7, text: '南非', checked: false },
        { id: 8, text: '智利', checked: false },
        { id: 9, text: '新西兰', checked: false },
        { id: 10, text: '其他', checked: false }
      ],

      /* 参观采购意向 */
      intentionData: [
        { id: 0, text: '无', checked: false },
        { id: 1, text: '1~10万', checked: false },
        { id: 2, text: '10~30万', checked: false },
        { id: 3, text: '30~50万', checked: false },
        { id: 4, text: '50~100万', checked: false },
        { id: 5, text: '100~500万', checked: false },
        { id: 6, text: '500~1000万', checked: false },
        { id: 7, text: '1000万以上', checked: false }
      ],

      /* 获取信息来源 */
      infoResourceData: [
        { id: 0, text: '“科通国际名酒展”公众号', checked: false },
        { id: 1, text: '展会网站', checked: false },
        { id: 2, text: '媒体杂志', checked: false },
        { id: 3, text: '邀请函', checked: false },
        { id: 4, text: '酒圈朋友', checked: false },
        { id: 5, text: '其他', checked: false }
      ]
    }
  },
  methods: {
    /* 验证码 */
    codeClick() {
      if (this.$util.checkPhone(this.form.mobile)) {
        this.codeDisabled = true
        if (this.codeDisabled) {
          let second = 60
          const timer = setInterval(() => {
            this.code = `${--second}s后可重发`
            if (second < 0) {
              clearInterval(timer)
              this.code = '获取验证码'
              this.codeDisabled = false
            }
          }, 1000)
        }
      } else {
        this.$uni.showToast('请输入正确的手机号码')
      }
    },

    /* 所在地区 */
    regionClick() {
      this.$refs.myPicker.open()
    },
    regionCancel(e) {
      this.form.province = ''
      this.form.city = ''
    },
    regionChange(e) {
      this.form.province = e.data[0].label
      this.form.city = e.data[1].label
    },

    pickerChange(e, key) {
      this.form[key] = this[`${key}Range`][e.detail.value]
    },
    pickerCancel(key) {
      this.form[key] = ''
    },
    switchChange(e, key, index) {
      this.$set(this[`${key}Data`][index], 'checked', e.detail.value)
      this.form[key] = this[`${key}Data`].filter(item => {
        return item.checked
      }).map(item => {
        return item.text
      }).join()
    },

    /* 表单提交 */
    formValidate() {
      const prompt = msg => {
        this.$uni.showToast(msg)
        return false
      }
      if (!this.form.userName) return prompt('姓名不能为空')
      if (!this.form.mobile) return prompt('手机号不能为空')
      if (!this.$util.checkPhone(this.form.mobile)) return prompt('手机号格式不正确')
      if (!this.form.code) return prompt('验证码不能为空')
      if (!this.form.company) return prompt('公司名不能为空')
      if (!this.form.email) return prompt('邮箱不能为空')
      if (!this.$util.checkEmail(this.form.email)) return prompt('邮箱格式不正确')
      if (!this.form.certNo) return prompt('证件号码不能为空')
      if (this.form.certNo.length < 18) return prompt('证件号码不少于18位')
      return this.form
    },
    submitClick() {
      const form = this.formValidate()
      if (form) {
        this.$uni.showMyModal({ 
          title: '提示',
          content: '提交成功',
          showCancel: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wine {
  min-height: 100vh;
  padding: 0 15px;
  color: $primary;
}
.form {
  &-item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #F5F5F5;
    &:nth-last-child(2) {
      border-bottom: none;
    }
    &:last-child {
      border-bottom: none;
    }
    &-label {
      display: inline-block;
      width: 100px;
    }
    &-input {
      flex: 1;
      .placeholder {
        color: #808080;
        font-size: 16px;
      }
    }
    &-button {
      width: 100%;
    }
    &-hover {
      opacity: .8;
    }
  }
}
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  &_label {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31.5%;
    height: 32px;
    margin: 0 4px 4px 0;
    border-radius: 4px;
    font-size: 12px;
    &.checked {
      border: 1px solid $theme;
      background-color: $theme;
      color: $white;
    }
    &.unchecked {
      border: 1px solid $border;
      background-color: $white;
      color: #808080;
    }
  }
  &_checkbox {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 30px;
    opacity: 0;
  }
}
</style>
