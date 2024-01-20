const app = getApp()

Page({
  accountLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  data: {
    nickName: "",
    avatarUrl: "",
    country: "",
    province: "",
    city: "",
    gender: ""
  },
  wechatLogin: function() {
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://example.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        var userInfo = res.userInfo;
        console.log(userInfo);
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var country = userInfo.country;
        var province = userInfo.province;
        var city = userInfo.city;
        var gender = userInfo.gender;
        if (gender == 1) {
          gender = "男";
        } else if (gender == 2) {
          gender = "女";
        } else {
          gender = "未知";
        }
        that.setData({
          nickName: nickName,
          avatarUrl: avatarUrl,
          country: country,
          province: province,
          city: city,
          gender: gender
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