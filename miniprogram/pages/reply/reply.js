// pages/reply/reply.js
const db = wx.cloud.database()
var util = require('../util/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatid: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */

  // url: '../reply/reply?chatid='+e.currentTarget.dataset.word+'&writer='+e.currentTarget.dataset.from+'&title='+e.currentTarget.dataset.title
  //     +'&info='+e.currentTarget.dataset.info+'&time='+e.currentTarget.dataset.time,
  onLoad: function (options) {
    var that = this;
    that.setData({
      chatid: options.chatid ,       //获取帖子id
      from: options.writer,
      title: options.title,
      info0: options.info0,
      info: null,
      time: options.time,
     })
    wx.getStorage({
      key: 'openid',
      success: function (res) {      //用户id
        that.setData({
          openid: res.data
        })
      },
    })
    // const result = await db.collection('todos').where({
    //   price: _.lt(100)
    // }).get()
    db.collection('reply').where({
       theme:this.data.chatid
     })
      .orderBy('createTime', 'asce') //按发布时间排序
      .get({
        success(res) {
          console.log("请求成功", res.data[0].info)
          that.setData({
            dataList: res.data
          })
          console.log(that.data.dataList[0])
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })
   },
     /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  refresh: function(){
    var that=this
    db.collection('reply').where({
      theme:this.data.chatid
    })
     .orderBy('createTime', 'asce') //按发布时间排序
     .get({
       success(res) {
         console.log("请求成功", res.data[0].info)
         that.setData({
           dataList: res.data
         })
         console.log(that.data.dataList[0])
       },
       fail(res) {
         console.log("请求失败", res)
       }
     })
  },
   //获取输入内容
  getInput2(event) {
    console.log("输入的称呼", event.detail.value)
    this.setData({
      writer: event.detail.value
    })
  },
  getInput3(event) {
    console.log("输入的内容", event.detail.value)
    this.setData({
      info: event.detail.value
    })
  },
  send: function () {
    var that = this
    wx.getStorage({
      key: 'login',
      success: function (res) {
        if (res.data) {
          that.setData({
            isSend: true
          })
        } else {
          wx.showToast({
            icon: "none",
            title: '你还未登录'
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          icon: "none",
          title: '你还未登录'
        })
      }
    })
  },
  // 关闭弹窗
  close: function () {
    this.setData({
      isSend: false
    })
  },
  //上传数据
  publish: function () {
    let writer = this.data.writer
    let theme= this.data.chatid
    let info = this.data.info
    var likeNumber = 1
    console.log(likeNumber)
    if (!writer) {
      wx.showToast({
        icon: "none",
        title: '称呼不能为空'
      })
      return
    }
    if (!info || info.length < 6) {
      wx.showToast({
        icon: "none",
        title: '内容要多于六个字'
      })
      return
    }
    wx.showLoading({
      title: '发布中...',
    })
    wx.cloud.callFunction({
      name: 'reply',
      data: {
        info: this.data.info,
        theme: this.data.chatid,
        writer: this.data.writer,
        sendTime: util.formatTime(new Date())
      },
      success: res => {
        wx.hideLoading()
        wx.showToast({
          title: '发布成功',
        })
        console.log('发布成功', res)
        this.setData({
          isSend: false
        })
        this.refresh()
        this.setData({
          writer: null,
          info: null
        })
      },
      fail: err => {
        wx.hideLoading()
        wx.showToast({
          icon: 'none',
          title: '网络不给力....'
        })
        console.error('发布失败', err)
      }
    })
    // db.collection('biaobai').add({
    //   data: {
    //     createTime: new Date(),
    //     info: this.data.info,
    //     to: this.data.to,
    //     writer: this.data.writer,
    //     sendTime: util.formatTime(new Date())
    //   },
    //   success: res => {
    //     wx.hideLoading()
    //     wx.showToast({
    //       title: '发布成功',
    //     })
    //     console.log('发布成功', res)
    //     this.setData({
    //       isSend: false
    //     })
    //     this.onLoad()
    //   },
    //   fail: err => {
    //     wx.hideLoading()
    //     wx.showToast({
    //       icon: 'none',
    //       title: '网络不给力....'
    //     })
    //     console.error('发布失败', err)
    //   }
    // })

  },
  delete: function (e) {
    var info = e.currentTarget.dataset.t
    console.log(info)
    db.collection('reply').doc(info._id).remove({
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          icon: 'success',
          title: '删除成功',
        })
      }
    })
    this.refresh()
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
    this.refresh()
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