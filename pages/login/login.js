const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },
  login: function(event) {
    var username = event.detail.value.username;
    var password = event.detail.value.password;
    // TODO: 发送登录请求
  }
})
