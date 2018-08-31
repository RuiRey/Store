const app = getApp();

// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
     userInfo: null,
    // userInfo:{
    //   nickName:"Rey",
    //   avatarUrl:"http://wx1.sinaimg.cn/large/006i487Uly1fejnth3j13j30c80bsjro.jpg"
    // }
    authType: app.data.authType,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  

  onTapLogin: function () {
    app.login({
      success:({userInfo})=>{
        this.setData({ 
          userInfo: userInfo,
          authType: app.data.authType,
        });
      },
      fail: ()=>{
        this.setData({ authType: app.data.authType });
      },
    });
  },

  onTapAddress: function(){
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  onTapKf(){
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  onShow: function(){
    this.setData({ authType: app.data.authType });
    app.checkSession({
      success: ({userInfo})=>{
        this.setData({ userInfo })
      }
    });
  }

})