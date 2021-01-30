import request from './request'

// 获取所有歌单分类
export function getAllSongsSort(){
    return request({
        url:'/playlist/catlist'
    })
}

// 获取歌单详情
export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
    return request({
      url: "/top/playlist",
      params: {
        cat,
        limit,
        offset
      }
    })
  }