Page({ 
  data: {
    name: ''
  },
  onLoad: function(options) {
    this.data.name = options.name 
    var that = this 
    wx.showToast({ 
      title: '加载中', 
      icon: 'loading', 
      duration: 1000 
    }) 
  },
  onReady () {
    wx.setNavigationBarTitle({ title: '十三世纪上半叶蒙古高原气候变化特征与成因分析' })
  }
})