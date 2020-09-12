export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
