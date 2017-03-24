/**
 * Created by qx on 2017/3/18.
 */
import * as types from './mutations-types'

export let mutations = {
  [types.SHOW_LOADING] (state) {
    state.loading = true
  },
  [types.HIDE_LOADING] (state) {
    state.loading = false
  }
}
