/**
 * Created by qx on 2017/3/1.
 */
import {
  RouterView,
  Modules,
  Login
} from '../components'

export default [
  {
    path: '/',
    redirect: (to) => {
      return '/main'
    },
    hidden: true
  }, {
    path: '/login',
    component: Login,
    hidden: true
  }, {
    path: '/404',
    component: RouterView.NotFound,
    hidden: true
  },
  {
    path: '/main',
    component: RouterView.Main,
    children: [
      {
        path: '',
        redirect: to => {
          return {path: 'ChannelManage'}
        },
        hidden: true
      },
      {
        path: 'ChannelManage',
        name: '渠道管理',
        icon: '',
        component: Modules.ChannelManage.Media
      }, {
        path: 'DataReport',
        name: '数据报表',
        icon: '',
        component: RouterView.Content,
        children: [{
          path: 'MediaData',
          name: '媒体数据',
          icon: '',
          component: Modules.DataReport.MediaData
        }, {
          path: 'SettlementReport',
          name: '结算数据',
          icon: '',
          component: Modules.DataReport.SLMReport
        }]
      }, {
        path: 'KeywordM',
        name: '密码管理',
        icon: '',
        component: Modules.KeywordM
      }
    ]
  }
]
