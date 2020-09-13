import request from './network'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsdata(type,page) {
  return request({
      url: '/home/data',
      data:{
        type,
        page
      }
    })
}