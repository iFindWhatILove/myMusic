import request from './request'

// 获取各种排行榜
export function getTopList(){
    return request({
        url: '/toplist'
    })
}

// 获取某个排行榜的详情
export function getTopDetail(id){
    return request({
        url: '/playlist/detail',
        params: {
            id,
        }
    })
}