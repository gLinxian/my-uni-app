/**
 * 配置文件
 * 
 * @author linxian
 */
import Vue from 'vue'

export const config = {
  baseUrl: 'https://www.baidu.com/',
  
  theme: '#687CD5',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF3B30',
  green: '#4CD964',
  blue: '#007AFF',

  default: '#409EFF',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399',
  
  lightDefault: '#ECF5FF',
  lightSuccess: '#F0F9EB',
  lightWarning: '#FDF6EC',
  lightDanger: '#FEF0F0',
  lightInfo: '#F4F4F5',
  
  lgTheme: 'linear-gradient(45deg, #687CD5, #DFA3D6)',
  lgBlue: 'linear-gradient(to right, #05d7ff, #007AFF)'
}

Vue.prototype.$config = config
