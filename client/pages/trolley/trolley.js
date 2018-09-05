const qcloud = require('../../vendor/wafer2-client-sdk/index');
const config = require('../../config');
const app = getApp();

// pages/trolley/trolley.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    authType: app.data.authType,
    trolleyList: [{
      id: 1,
      name: '商品1',
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      price: 45,
      source: '海外·瑞典',
      count: 1,
    }, {
      id: 2,
      name: '商品2',
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      price: 158,
      source: '海外·新西兰',
      count: 3,
    }], // 购物车商品列表
    trolleyCheckMap: [undefined, true, undefined], // 购物车中选中的id哈希表
    trolleyAccount: 45, // 购物车结算总价
    isTrolleyEdit: false, // 购物车是否处于编辑状态
    isTrolleyTotalCheck: true, // 购物车中商品是否全选

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