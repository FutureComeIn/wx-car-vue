// pages/join/join.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count:0,  //地图点击次数
    isShow:false,
    array: ['中国(China)', '美国(America)','巴西(Brazil)', '日本(Japan)'],
    workArray:['学生','互联网','教育','金融','医疗'],
    windex:0,
    index:0,

    type:1,
    img:"",
    vtype:1,
    video:"",

  },
  changeControy: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  changeWork:function(e) {
    this.setData({
      windex:e.detail.value
    })
  },
  //获取地图
  moveToLocation: function () {
    this.setData({
      count: this.data.count + 1
    });
    if (this.data.count % 2 == 1) {
      this.setData({
        isShow: true
      })
      wx.createMapContext('myMap').moveToLocation();
    } else {
      this.setData({
        isShow: false
      })
    }
  },

  formSubmit: function (e) {
    // if (getApp().videoList[0] != "") {
    //   wx.showToast({
    //     title: '您已注册，不能重复注册哦...',
    //     icon: 'none',
    //     duration: 1000
    //   })
    //   return;
    // }
    var img = getApp().myImg;
    var video = getApp().myVideo;
    var title = e.detail.value.nickname;
    var height = e.detail.value.height;
    var work = this.data.workArray[e.detail.value.work];
    var controy = this.data.array[e.detail.value.controy];
    var desc = "身高：" + height + "cm\n职业：" + work + "\n国籍：" + controy;
    var love = "/images/heart.png";
    var vcr = "/images/vcr.png";
    if (title == "" || height == "" || img == "") {
      wx.showToast({
        title: '昵称、身高、头像、不能为空',
        icon: 'none',
        duration: 1000
      });
      return;
    }
    /**不存储在数组中了
     * getApp().proList.unshift({ img, title, desc, love, vcr });
     * getApp().videoList[0] = video;
     */
    //
    //存储到缓存区
    wx.setStorage({
      key: 'person',
      data: { img, title, desc, love, vcr },
    })
    wx.setStorage({
      key: 'video',
      data: video,
    })

    wx.showToast({
      title: '成功，首页查看',
      icon: 'success',
      duration: 1000
    })
  },
  formReset: function () {
    console.log('form发生了reset事件');
  },

  //上传图片  视频
  camera: function () {
    var that = this
    that.setData({
      type: 2
    })
    wx.chooseImage({
      count: 1,
      sizeType: ['original,compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var path = res.tempFilePaths[0]
        that.setData({
          img: path
        })
        getApp().myImg = path;
        wx.uploadFile({
          url: 'http://education1.com/api.php/api/upload',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          filePath: path,
          name: 'file',
          success: function (res) {
            console.log("res_data=" + res.data);
          }
        })
      },
      fail: function (res) {
        that.setData({
          type: 1
        })
      }
    })
  },
  video: function () {
    var that = this
    that.setData({
      vtype: 2
    })
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        var path = res.tempFilePath
        that.setData({
          video: path,
        })
        getApp().myVideo = path;
        wx.uploadFile({
          url: 'http://education1.com/api.php/api/upload',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            '你的数据': '你的数据'
          },
          filePath: path,
          name: 'file',
          success: function (res) {
            console.log(res.data);
          }
        })
      },
      fail: function (res) {
        that.setData({
          vtype: 1
        })
      }
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