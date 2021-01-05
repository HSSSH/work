import axios from 'axios';

//获取某学生所有做过的试卷
export function getCommitPaperList() {
    return axios.get('/paper/listPaperCommit',{
        params: {
        }
    })
    .then(res => res.data);
}

//获取简单结果列表所有做过的试卷
export function getCommitPaperListSimple(uid,pid) {
    return axios.get('/paperResult/listSimpleResult',{
        params: {
            uid:uid,
            pid:pid
        }
    })
    .then(res => res.data);
}