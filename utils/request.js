/**
 * 网络请求封装
 * 
 * @author linxian
 */
import { config } from './config.js'

function showErrorToast(err, cb) {
	uni.showToast({
		title: '网络繁忙 稍后再试',
		icon: 'none',
		mask: true,
		success: () => cb(err)
	})
}

export const request = options => {
	return new Promise((resolve, reject) => {
		uni.showLoading({ title: '', mask: true })
		uni.request({
			url: `${config.baseUrl}${options.url}` || '',
			data: options.data || {},
			header: {
				'content-type': 'application/json;charset=uft-8',
				'token': ''
			},
			method: options.method || 'GET',
			timeout:  options.method } || 30000,
			success: res => {
				res.statusCode === 200
					? resolve(res.data)
					: showErrorToast(res, reject)
			},
			fail: err => {
				showErrorToast(err, reject)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}
