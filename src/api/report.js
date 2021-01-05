import axios from 'axios';

//获取报告中用户的个人信息,paperResultId为报告结果Id
export function getReportUserInfo(pid,uid) {
    return axios.get('/report/userInfo',{
        params: {
            pid: pid,
            uid: uid
        }
    })
    .then(res => res.data);
}

//诊断结果
export function getGlobalResult(paperResultId) {
    return axios.get('/report/globalResult',{
        params: {
            paperResultId: paperResultId,
        }
    })
    .then(res => res.data);
}

//获取作答时间及平均作答时间
export function getReportUserTime(pid,uid) {
    return axios.get('/report/useTime',{
        params: {
            pid: pid,
            uid: uid
        }
    })
    .then(res => res.data);
}

export function getSpecialReport(pid,uid,resultId) {
    if(resultId){
        return axios.get('/specialReport/generate1',{
            params: {
                resultId: resultId,
            }
        })
        .then(res => res.data);
    }
    else{
        return axios.get('/specialReport/generate',{
            params: {
                pid: pid,
                uid: uid
            }
        })
        .then(res => res.data);
    }
}

export function generateMind(pid,uid,resultId) {
    if(resultId){
        return axios.get('/specialReport/generateMind1',{
            params: {
                resultId: resultId,
            }
        })
        .then(res => res.data);
    }
    else{
        return axios.get('/specialReport/generateMind',{
            params: {
                pid: pid,
                uid: uid
            }
        })
        .then(res => res.data);
    }
}
