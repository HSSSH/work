import axios from 'axios';

//获取用户列表
export function getUserList(grade,username) {
    return axios.get('/user/listStudent',{
        params: {
            grade: grade,
            username: username
        }
    })
    .then(res => res.data);
}

//新增用户
export function addUser(user) {
    return axios({
        method: 'post',
        url: '/user/addStudent',
        data: user
    }).then(res => res.data)
}

//修改用户
export function updateUser(user) {
    return axios({
        method: 'post',
        url: '/user/updatePassword',
        data: user
    }).then(res => res.data)
}

//删除用户
export function deleteUser(uid) {
    return axios({
        method: 'post',
        url: '/user/deleteStudent',
        params: {uid: uid}
    }).then(res => res)
}
