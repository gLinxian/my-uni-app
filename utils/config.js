/**
 * 配置文件
 * 
 * @author linxian
 */
import Vue from 'vue'

export const config = {
  baseUrl: 'https://www.baidu.com/',
  
  theme: '#007AFF',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF3B30',
  green: '#4CD964',
  blue: '#007AFF',
  
  lgTheme: 'linear-gradient(45deg, #687CD5, #DFA3D6)',
  lgBlue: 'linear-gradient(to right, #05d7ff, #007AFF)'
}

Vue.prototype.$config = config
