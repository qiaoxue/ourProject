/**
 * Created by qx on 2017/3/3.
 * 设置全局的接口根地址，并且对请求数据过程中出现的错误进行统一处理，比如,404，放到对应的回调函数中
 */
var settings = {
  // 全局设置
  globalSet: {
    host: '/192.168.1.21' // 模拟host
  },
  // 回调函数
  callBack: {
    /*
     * ajax 请求成功，返回的状态码不是200时调用
     * @params {Object} err 返回的对象，包含错误码和错误信息
     * */
    statusError (err) {
      if (err.status !== 404) {
        this.$message({
          showClose: true,
          message: '返回错误：' + err.msg,
          type: 'error'
        })
      } else {

      }
    },

    /*
     * ajax 请求网络出错时调用
     * */
    requestError (err) {
      this.message({
        showClose: true,
        message: '请求错误：' + err.response.status + ',' + err.response.statusText,
        type: 'error'
      })
    }
  }
}

module.exports = settings
