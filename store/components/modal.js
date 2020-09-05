export default {
  namespaced: true,
  state: {
    show: false,
    title: '提示',
    content: '',
    showCancel: true,
    animate: true,
    cancelText: '取消',
    cancelColor: '#007AFF',
    confirmText: '确定',
    confirmColor: '#007AFF',
    success: null
  },
  mutations: {
    SET_STATE(state, obj) {
      state[obj.key] = obj.val
    }
  }
}
