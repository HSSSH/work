/*
 * @ file
 * @ des 定义state的根文件，定义了唯一的state状态树
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const globalState = {
    loginUser: {},
};

export default new Vuex.Store({
    modules: {},
    state: globalState,
    getters,
    actions,
    mutations,
})