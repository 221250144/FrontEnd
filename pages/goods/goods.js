const app = getApp();
let name, description, price, type;

Page({
  getName(event) {
    console.log(event.detail.value);
    name = event.detail.value;
    },

    getDescription(event) {
      console.log(event.detail.value);
      description = event.detail.value;
    },

    getPrice(event) {
      console.log(event.detail.value);
      price = event.detail.value;
    },

    handleTypeChange(event) {
      console.log(event.detail.value);
      type = event.detail.value;
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


  goodssubmit: function () {
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
    
    console.log(name, description, price, type);
    wx.request({
      url: 'http://localhost:8080/addGoods',
      method: 'GET',
      data: {
        name,
        description,
        price,
        type,
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