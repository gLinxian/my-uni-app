export default {
  namespaced: true,
  state: {
    show: false
  },
  mutations: {
    SET_STATE(state, obj) {
      state[obj.key] = obj.val
    }
  }
}
