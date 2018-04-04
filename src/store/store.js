/**
 * vuex数据控制中心
 * */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
Vue.use(Vuex);

/** 数据存储 */
const state = {
    nav_index: 1
};

/** 用export default 封装代码，让外部可以引用 */
export default new Vuex.Store({
    state,
    mutations
});

/**
 * 提交同步请求
 * */
const mutations = {
    /**判断菜单栏选择情况*/
    [ types.SET_NAV_INDEX ] (state,nav_index) {
        state.nav_index = nav_index;
    }
};