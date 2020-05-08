// pages/persion/persion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:""
  },
  callme:function(){
      wx.makePhoneCall({
        phoneNumber: '10086',
      })
  },
  wxme:function(){
    wx.showToast({
      image:'/images/wxm.png',
      title:'微信码',
      duration: 8000
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
    //wx.clearStorage("person");  清除缓存
    var that=this;
    wx.getStorage({
      key: 'nickname',
      success: function(res) {
        that.setData({
          nickname:res.data
        })
        console.log("val=" + that.data.nickname);
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