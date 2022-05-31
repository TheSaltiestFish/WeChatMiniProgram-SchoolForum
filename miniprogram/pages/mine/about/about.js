// pages/mine/about/about.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  /**
   * 关于我们页面合作电话
   */
  makePhone(){
    wx.makePhoneCall({
      phoneNumber: "13333556128",
    })
  },
  dizhi(){
      wx.openLocation({
        latitude: 39.084, //目的地位置
        longitude: 121.818,
        // 121.822957,39.090874
        scale: 20,
        name: '大连理工大学开发区校区', //自定义
        address: '表白墙总部' //自定义
      })
  }
})