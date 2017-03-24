/**
 * Created by qx on 2017/3/18.
 */
const state = {
  loading: false
}

module.exports = {
  state: state,
  mutations: require('./mutations').mutations,
  action: require('./actions').actions
}
