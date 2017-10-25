Page({ 
  data: {
    name: '',
    list: [],
  },
  onLoad: function(options) {
    this.data.name = options.name 
    var that = this 
    wx.showToast({ 
      title: '加载中', 
      icon: 'loading', 
      duration: 1000 
    })
    // 获取网络数据
    wx.request({
      url: 'https://api.github.com/users/hirojisawatari/repos',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
          list: res.data,
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    }) 
  },
  onReady () {
    wx.setNavigationBarTitle({ title: this.data.name })
  }
})