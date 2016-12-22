Page({ 
    onLoad: function(options) { 
        var duanziId = options.id 
        var that = this 
        wx.showToast({ 
            title: '加载中', 
            icon: 'loading', 
            duration: 1000 
        }) 
    } 
})