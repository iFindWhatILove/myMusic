import request from './request'

export function getTopBanner(){
    return request({
        url: '/banner'
    })
}

export function getHotRecommend(){
    return request({
        url: '/personalized'
    })
}

export function getNewAlbum(limit, offset) {
    return request({
      url: "/top/album",
      params: {
        limit,
        offset
      }
    })
  }

export function getTopList(idx){
  return request({
    url: '/top/list',
    params: {
      idx,
    }
  })
}

export function getResidentSinger(type){
  return request({
    url: '/toplist/artist',
    params: {
      type,
    }
  })
}

