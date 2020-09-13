//index.js
import {
  getMultidata,
  getGoodsdata
} from '../../service/home'

//获取应用实例
const app = getApp()

const TOP_DISTANCE = 1000
const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods: {
      new: {page: 0, list: ['1','2']},
      pop: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: 'pop',
    showBacktop: false
  },
  onLoad: function (options) {
    this._getMultidata()
    this._getGoodsdata('new')
    this._getGoodsdata('pop')
    this._getGoodsdata('sell')
  },
  //网络请求函数 封装 
  _getMultidata() {
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
  _getGoodsdata(type) {
    //获取当前page并加1
    const page = this.data.goods[type].page + 1

    getGoodsdata(type, page).then(res=> {
      //获取数据
      const list = res.data.data.list

      //保存数据
      const oldValue = this.data.goods[type].list
      oldValue.push(...list)

      //更新模型数据
      const pageKey = `goods.${type}.page`;
      const listKey = `goods.${type}.list`;
      this.setData({
        [pageKey]: page,
        [listKey]: oldValue
      })
    })
  },
  // 事件监听函数
  handleTabclick(event){
    const index = event.detail.index
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom() {
    // 下拉加载更多 -> 请求新的数据
    this._getGoodsdata(this.data.currentType)
  },
  
  onPageScroll(options){
    // console.log(options)
    // 频繁的调用setData函数并不好 
    // this.setData({
    //   showBacktop: options.scrollTop >= TOP_DISTANCE
    // })
    const flag = options.scrollTop >= TOP_DISTANCE
    if(flag != this.data.showBacktop){
      this.setData({
        showBacktop: flag
      })
    }
  }
})