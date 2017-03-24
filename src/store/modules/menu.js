/**
 * Created by qx on 2017/3/18.
 */
import * as types from '../mutation-types'
const state = {
  loading: false,
  menu_flag: true,
  menus: []
}

const getters = {
  menus: state => {
    return state.menus
  }
}

const mutations = {
  [types.MSHOW_LOADING] (state) {
    state.loading = true
  },
  [types.MHIDE_LOADING] (state) {
    state.loading = false
  }
}

const actions = {
  [types.MSHOW_LOADING]: ({commit}) => {
    commit(types.MSHOW_LOADING)
  },
  [types.MHIDE_LOADING]: ({commit}) => {
    commit(types.MSHOW_LOADING)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
