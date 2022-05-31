// pages/index405/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        src:'../../images/dut3.jpg',
      },
      {
        src:'../../images/dut2.jpg',
      },
      {
        src:'../../images/dut1.jpg',
      },
    ],
    indicatorDots: true,
    autoplay: false,
    circular: false,
    vertical: false,
    interval: 2000,
    duration: 500,
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeCircular: function(e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVertical: function(e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  picclicked0: function() {
    wx.navigateTo({
      url: '../news/news',
    })
  },
  picclicked1: function() {
    wx.navigateTo({
      url: '../news1/news1',
    })
  },
  picclicked2: function() {
    wx.navigateTo({
      url: '../news2/news2',
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
    this.onLoad()
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