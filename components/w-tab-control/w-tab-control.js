// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })

      //将点击事件发送出去 
      this.triggerEvent('tabclick', {index, title: this.properties.titles[index]}, {})
    }
  }
})
