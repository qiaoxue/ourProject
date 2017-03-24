/**
 * Created by qx on 2017/3/3.
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  callback,
  globalSet
} from './settings.js'
Vue.use(VueAxios, axios)

// axios 配置
// Vue.axios.defaults.timeout = 5000
Vue.axios.defaults.baseURL = globalSet.host

// http request拦截器
Vue.axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// http response 拦截器
Vue.axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    // return Promise.reject(error)
  }
)

export default axios

/**
 * fetch请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve) => {
    axios.get(url, {
      params: params
    }).then(response => {
      if (response.data.status === 200) {
        resolve(response.data)
      } else {
        callback.statusError.call(this, response.data)
      }
    }).catch(err => {
      // reject(err)
      callback.requestError.call(this, err)
    })
  })
}

/**
 * post请求
 * @param url
 * @param data 默认为空对象
 * @returns { Pormise }
 */
/* global Pormise :true */
/* eslint no-undef: "error" */
export function post (url, data = {}) {
  return new Pormise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (response.data.status === 200) {
          resolve(response.data)
        } else {
          callback.statusError.call(this, response.data)
        }
      }).catch(err => {
        callback.requestError.call(this, err)
      })
  })
}
