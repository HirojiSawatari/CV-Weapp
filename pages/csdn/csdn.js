Page({ 
  data: {
    name: '',
    essays: [
      ['Android开发获取设备硬件相关信息', '2016-11-22 22:25','android'],
      ['Scrapy爬虫+Tkinter爬取天猫热门商品（一）', '2016-12-17 23:28','scrapy1'],
      ['Scrapy爬虫+Tkinter爬取天猫热门商品（二）', '2016-12-18 00:00','scrapy2'], 
      ['Scrapy爬虫+Tkinter爬取天猫热门商品（三）', '2016-12-18 00:32','scrapy3']
    ]
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
    wx.setNavigationBarTitle({ title: this.data.name })
  }
})