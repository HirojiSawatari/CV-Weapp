Page({
  data: {
    title: '联系我',
    myInfo: {
      phone: '186-5562-9450',
      email: 'ka_tou@katouspace.com',
      qrcode: '../../images/qrcode.jpg'
    },
    latitude: 39.992617,
    longitude: 116.317001,
    markers: [{
      latitude: 39.992617,
      longitude: 116.317001,
      name: '北京大学物理学院\n北京市海淀区成府路209号'
    }],
  },
  onLoad () { 
    var that = this 
  },
  onReady () {
    wx.setNavigationBarTitle({ title: '联系' })
  }
})