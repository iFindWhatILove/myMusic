import request from './request'

// 获取 djradio 第一部分的数据
export function getDjCatelist(){
    return request({
        url: '/dj/catelist'
    })
}

export function getDjRadioRecommend(type) {
    return request({
      url: "/dj/recommend/type",
      params: {
        type
      }
    })
  }
  
  export function getDjRadios(cateId, limit = 30, offset = 0) {
    return request({
      url: "/dj/radio/hot",
      params: {
        cateId,
        limit,
        offset
      }
    })
  }