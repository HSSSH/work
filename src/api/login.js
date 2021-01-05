import axios from 'axios';

//登录
export function login({username, password,loginFrom}) {
    return axios({
        method: 'post',
        url: '/login',
        data: {
            username,
            password,
            loginFrom
        },
        transformRequest: [function(data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret;
        }],
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res.data)
}

//验证身份唯一
export function checkOnly(name){
    return axios.get('/open/user/checkUsername?username=' + name).then(result => result.data)
}

//注册
export function register(reg) {
    return axios({
        method: 'post',
        url: '/open/user/register',
        data: reg
    }).then(res => res.data)
}

//获取当前身份
export function getLoginUser(){
    return axios.get('/self/info').then(result => result.data)
}

//登出
export function logout() {
    return axios.get('/logout').then(res => res.data);
}