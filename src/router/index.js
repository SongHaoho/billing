import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import account from '@/components/account'
import bill from '@/components/bill'
import chart from '@/components/chart'

Vue.use(Router)

export default new Router({
  routes: [
    /* 首页 */
    {
      path: '/',
      component: Home
    },
    /* 记账 */
    {
      path: '/account',
      name: 'account',
      component: account
    },
    /* 账单 */
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    /* 分析 */
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
  ]
})
