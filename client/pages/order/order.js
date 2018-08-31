const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config');
const app = getApp();

// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    authType: app.data.authType
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onTapLogin: function () {
    app.login({
      success: ({ userInfo }) => {
        this.setData({
          userInfo: userInfo,
          authType: app.data.authType,
        });
      },
      fail: () => {
        this.setData({ authType: app.data.authType });
      },
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ authType: app.data.authType });
    app.checkSession({
      success: ({ userInfo }) => {
        this.setData({ userInfo })
      }
    });
  },
})