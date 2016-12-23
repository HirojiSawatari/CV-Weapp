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
    wx.setNavigationBarTitle({ title: this.data.name })
  }
})