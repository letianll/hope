// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

    phonecall: '123456789123',
    movies: [
      {
        'urls': '','photo':'/images/banner1.png'},
      {
        'urls': '', 'photo': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        'urls': '', 'photo': '/images/banner2.jpg'
      }
    ],
    pics: [
      {
        'urls': '', 'photo': '/images/banner1.png'
      },
      {
        'urls': '', 'photo': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        'urls': '', 'photo': '/images/banner2.jpg'
      },
      {
        'urls': '', 'photo': '/images/banner1.png'
      },
      {
        'urls': '', 'photo': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        'urls': '', 'photo': '/images/banner2.jpg'
      }
    ],
  },

  /**
   * 拨打电话
   */
  phonecallevent: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.phonecall
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})