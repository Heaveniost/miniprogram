//index.js
import {
  getMultidata
} from '../../service/home'

//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选']
  },
  onLoad: function (options) {
    getMultidata().then(res => {
      //取出相应的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  handleTabclick(event){
    console.log(event)
  }
})