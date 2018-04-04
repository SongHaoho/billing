import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import account from '@/components/account'
import bill from '@/components/bill'
import chart from '@/components/chart'

Vue.use(Router)

const router = new Router({
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    /* 记账 */
    {
      path: '/account',
      name: 'account',
      component: account,
      meta: {
        index: 2
      }
    },
    /* 账单 */
    {
      path: '/bill',
      name: 'bill',
      component: bill,
      meta: {
        index: 5
      }
    },
    /* 分析 */
    {
      path: '/chart',
      name: 'chart',
      component: chart,
      meta: {
        index: 6
    }
    },
  ]
});
export default router;
