import request from './network'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}