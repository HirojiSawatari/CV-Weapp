Page({
  data: {
    title: '联系我',
    myInfo: {
      phone: '18655629450',
      email: 'ka_tou@outlook.com',
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