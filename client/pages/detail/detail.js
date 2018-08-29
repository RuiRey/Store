const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config.js');

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProduct(options.id);
  },

  getProduct(id){
    wx.showLoading({
      title: '商品数据加载中',
    });

    qcloud.request({
      url: config.service.productDetail + id,
      success: res => {
        wx.hideLoading()
        let data = res.data;
        if(!data.code){
          this.setData({
            product: data.data,
          })
        }else{
          setTimeout(()=>{
            wx.navigateBack()
          }, 2000);
        }
      },
      fail: err => {
        wx.hideLoading();
        console.log(err);
        setTimeout(() => {
          wx.navigateBack()
        }, 2000);
      },
    })
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