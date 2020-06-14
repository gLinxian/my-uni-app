/**
 * 工具函数
 * 
 * @author linxian
 */
import Vue from 'vue'

/**
 * 验证数字
 * 
 * @param {Number} num
 */
function checkNum(num) {
	return /^\d{1,}$/g.test(num)
}

/**
 * 验证字母
 * 
 * @param {String} letter
 */
function checkLetter(letter) {
	return /^[a-zA-Z]+$/g.test(letter)
}

/**
 * 验证字母或数字
 * 
 * @param {Number || String} data
 */
function checkNumOrLetter(val) {
	return /^[0-9a-zA-Z]*$/g.test(val)
}

/**
 * 验证中文
 * 
 * @param {String} chinese
 */
function checkChinese(chinese) {
	return /^[\u4E00-\u9FA5]+$/g.test(chinese)
}

/**
 * 验证中文或字母或数字
 * 
 * @param {String} val
 */
function checkChineseOrNumberOrLettter(val) {
	return /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g.test(val)
}

/**
 * 验证邮箱
 * 
 * @param {String} email
 */
function checkEmail(email) {
	const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
	if (reg.test(email)) return true
}

/**
 * 验证手机号
 * 
 * @param {String} phone
 */
function checkPhone(phone) {
	const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
	if (reg.test(phone)) return true
}

/**
 * 隐藏手机号中间四位
 * 
 * @param {String} phone
 */
function hidePhoneMiddle(phone) {
	const reg = /(\d{3})\d{4}(\d{4})/
	return phone.toString().replace(reg, '$1****$2')
}

/**
 * 交换对象的键值和键名
 * 
 * @param {Obeject} obj
 */
function keyvalExchange(obj) {
  const newObj = {}
	Object.keys().forEach(key => {
		newObj[obj[key]] = key
	})
  return newObj
}

/**
 * 拷贝一份副本
 * 
 * @param {*} val
 */
function copy(val) {
  return JSON.parse(JSON.stringify(val))
}

/**
 * 去除字符串两边的空格
 * 
 * @param {String} str
 */
function stringTrim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 时间戳转日期格式
 * 
 * @param {Number} time 
 * @param {String} cFormat 
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) return null
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) time = parseInt(time)
    if ((typeof time === 'number') && (time.toString().length === 10)) time = time * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) value = '0' + value
    return value || 0
  })
  return time_str
}

Vue.prototype.$util = {
	checkNum,
	checkLetter,
	checkChinese,
	checkNumOrLetter,
	checkChineseOrNumberOrLettter,
	checkEmail,
	checkPhone,
	hidePhoneMiddle,
	keyvalExchange,
	copy,
	stringTrim,
	parseTime
}
