//app.js
App({
  //系统事件
  onLaunch: function () {//小程序初始化事件
    var that=this;
    //调用API从本地缓存中获取数据
    that.curid = wx.getStorageSync('curid') || that.curid;//API：获取本地缓存，若不存在设置为全局属性
    that.setlocal('curid', that.curid);//调用全局方法
  },

  /*******************************************************/

  //自定义全局方法
  setlocal:function(id,val){
    wx.setStorageSync(id, val);//API：设置本地缓存
  },
  //自定义全局属性
  curid:"CN101010100",
  version:"1.0",

  proList: [
    {
      img: "/images/yx.png",
      title: "韩雪",
      desc: "身高：160cm\n职业：学生\n国籍:中国(China)",
      love: "/images/heart.png",
      vcr: "/images/vcr.png"
    },
    {
      img: "/images/11.jpg",
      title: "周苏曼",
      desc: "身高：158cm\n职业：学生\n国籍:中国(China)",
      love: "/images/heart.png",
      vcr: "/images/vcr.png"
    },
    {
      img: "/images/22.jpg",
      title: "刘子稀",
      desc: "身高：165cm\n职业:学生\n国籍:中国(China)",
      love: "/images/heart.png",
      vcr: "/images/vcr.png"
    }
  ],
  myImg:"",

  videoList:[
    "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
  ],
  myVideo:""
})

