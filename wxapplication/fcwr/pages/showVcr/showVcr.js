// pages/showVcr/showVcr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      addVideo:"",
      showOrHidden1: false,
      showOrHidden2: false,
      showOrHidden3: false,
      showOrHidden4: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var index=options.index;
      if(index == 0) {
        this.setData({
          showOrHidden1: true
        })
      }else if (index == 1) {
        this.setData({
          showOrHidden2: true
        })
      }else if (index == 2) {
        this.setData({
          showOrHidden3: true
        })
      }else{
        this.setData({
          showOrHidden4: true
        })
      }
    //   var WxParse = require('../wxParse/wxParse.js');
    //   var that = this;
    //   wx.request({
    //       url: 'https://www.baidu.com',
    //       method: 'POST',
    //       data: {
    //           'id': 13
    //       },
    //       header: {
    //           'content-type': 'application/json'
    //       },
    //         /**
    //         * html解析
    //         */
    //       success: function (res) {
    //           var article = res.data[0].post; // res.data;
    //           WxParse.wxParse('article', 'html', article, that, 5);
    //       },
    //       fail: function (res) { },
    //       complete: function (res) { },
    //   })
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
    var videoList = getApp().videoList;
    this.setData({
      videoList: videoList,
    })
    //取缓存在本地的video
    var that = this;
    wx.getStorage({
      key: 'video',
      success: function (res) {
        that.setData({
          addVideo: res.data
        })
      },
    })
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