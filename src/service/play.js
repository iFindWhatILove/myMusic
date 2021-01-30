import request from './request'

// 获取音乐的音频文件
export function getMusicUrl(id){
    return request({
        url: '/song/url',
        params: {
            id,
        }
    })
}

// 获取歌词
export function getLyric(id){
    return request({
        url: '/lyric',
        params: {
            id,
        }
    })
}

// 获取歌曲详情
export function getMusicDetail(ids){
    return request({
        url: '/song/detail',
        params: {
            ids,
        }
    })
}
