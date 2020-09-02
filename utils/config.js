/**
 * 配置文件
 * 
 * @author linxian
 */
import Vue from 'vue'

export const config = {
  baseUrl: 'https://www.baidu.com/',
  
  theme: '#123456',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF3B30',
  green: '#4CD964',
  blue: '#007AFF',
  blueLinearGradient: 'linear-gradient(to right, #05d7ff, #007AFF)'
}

Vue.prototype.$config = config
