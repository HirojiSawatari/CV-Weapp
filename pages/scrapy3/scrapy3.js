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
    wx.setNavigationBarTitle({ title: 'Scrapy爬虫+Tkinter爬取天猫热门商品（三）' })
  }
})