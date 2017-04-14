Page({ 
  data: {
    name: '',
    essays: [
      ['十三世纪上半叶蒙古高原气候变化特征与成因分析', '摘要：利用通用地球系统模式CESM的过去2000年气候模拟试验结果，在与历史重建资料以及观测/再分析资料进行对比验证的基础上，分析了蒙古帝国扩张时期，即十三世纪上半叶蒙古高原气候变化的特征并初步探讨了其成因。','mongolia','何韬，刘健，王志远']
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