/**
 * Created by qx on 2017/3/18.
 */
import * as types from './mutations-type'

export let actions = {
  [types.SHOW_LOADING]: ({commit}) => {
    commit(types.SHOW_LOADING)
  },
  [types.HIDE_LOADING]: ({commit}) => {
    commit(types.HIDE_LOADING)
  }
}
