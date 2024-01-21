const app = getApp();
let name, description, price;

Page({
  getName(event) {
    console.log(event.detail.value);
    name: event.detail.value;
    },

    getDescription(event) {
      description: event.detail.value;
    },

    getPrice(event) {
      price: event.detail.value;
    },


  // 选择图片
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        });
      }
    });
  },


  submit: function () {
    var that = this;
    // 上传图片
    wx.uploadFile({
      url: 'http://localhost:8080/updateGoodsImage',
      filePath: that.data.tempFilePath,
      name: 'file',
      formData: {
        goodsName: encodeURIComponent(name) // 编码商品名
      },
      success: function (res) {
        // 直接使用后端返回的文件路径
        var data = res.data;
        console.log(data);
        if (data) {
          that.setData({
            imageUrl: 'http://localhost:8080/' + data
          });
          wx.showToast({
            title: '上传成功',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: '上传失败',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '上传失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
    
    console.log(username, age, id, password,)
    wx.request({
      url: 'http://localhost:8080/add',
      method: 'GET',
      data: {
        name: username,
        age,
        id,
        password,
      },
      success(res){
        console.log("添加成功", res)
      },
      fail(res){
        console.log("添加失败", res)
      }
    })

    wx.request({
      url: 'http://localhost:8080/addGoods',
      method: 'GET',
      data: {
        name
      },
      success(res){
        console.log("添加成功", res)
      },
      fail(res){
        console.log("添加失败", res)
      }
    })



  }
})