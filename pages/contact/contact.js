Page({
  data: {
    title: '联系我',
    myInfo: {
      phone: '186-5562-9450',
      email: 'ka_tou@katouspace.com',
      qrcode: '../../images/qrcode.jpg'
    }
  },
  onLoad () { 
    var that = this 
  },
  onReady () {
    wx.setNavigationBarTitle({ title: '联系' })
  }
})