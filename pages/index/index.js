//index.js
//获取应用实例
const app = getApp()

import request from '../../service/network'
Page({
  data: {
    motto: 'Hello World',
  },
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/z8/recommend',
    //   success: function(res) {
    //     console.log(res)
    // }})
    request({
      url: 'http://152.136.185.210:8000/api/z8/recommend'
    }).then(res => {
      console.log(res + 'successed')
    }).catch(err => {
      console.log(err)
    })
  }
})
