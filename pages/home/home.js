const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toSearch: function() {
    wx.navigateTo({
      url: "../search/search"
    })
  },

  food: function() {
    wx.navigateTo({
      url: "../food/food"
    })
  },

  clothes: function() {
    wx.navigateTo({
      url: "../clothes/clothes"
    })
  },

  furnishing: function() {
    wx.navigateTo({
      url: "../furnishing/furnishing"
    })
  },

  study: function() {
    wx.navigateTo({
      url: "../study/study"
    })
  },

  electric: function() {
    wx.navigateTo({
      url: "../electric/electric"
    })
  },

  daily: function() {
    wx.navigateTo({
      url: "../daily/daily"
    })
  },

  medical: function() {
    wx.navigateTo({
      url: "../medical/medical"
    })
  },

  sport: function() {
    wx.navigateTo({
      url: "../sport/sport"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})