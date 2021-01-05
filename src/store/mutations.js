/*
 * @ file
 * @ des 定义 mutation，更新设置状态state从而更新界面，这里的 mutation 一般是由 actions 触发
 */

export default {    
    setLoginUser (state, user) {
        state.loginUser =  user;
    },
}