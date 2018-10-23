// pages/pagepublication/pagepublication.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileds: ['技术咨询', '产品询价','代理合作','其他'],
    startTime: "",
    endTime: "",
    pics: [],
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isShow: true,
    fIndex: 2,
    jj_num: 0,

  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.pics;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log(images);
          console.log('点击确定了');
          if (images.length >= 9) {
            that.setData({
              isShow: (!that.data.isShow)
            })
          } else {
            that.setData({
              isShow: (that.data.isShow)
            })
          }
          images.splice(index, 1);

        } else if (res.cancel) {
          console.log('点击取消了');
          if (images.length >= 9) {
            that.setData({
              isShow: (!that.data.isShow)
            })
          } else {
            that.setData({
              isShow: (that.data.isShow)
            })
          }
          return false;
        }

        that.setData({
          pics: images
        });
      }
    })
  },

  // 图片上传
  chooseImage: function () {
    var _this = this,
      pics = this.data.pics;
    wx.chooseImage({
      count: 9 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var imgSrc = res.tempFilePaths;
        pics = pics.concat(imgSrc);
        // 控制触发添加图片的最多时隐藏
        if (pics.length >= 9) {
          _this.setData({
            isShow: (!_this.data.isShow)
          })
        } else {
          _this.setData({
            isShow: (_this.data.isShow)
          })
        }
        _this.setData({
          pics: pics
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  // 图片预览
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.pics
    })
  },
  //选择领域
  pickerFiled: function (e) {
    this.setData({
      fIndex: e.detail.value
    })
  },
  bindFormSubmit: function (e) {
    var that = this;
    if (e.detail.value.content == 0) {

      wx.showToast({

        title: that.data.config.feedback_3,

        icon: 'none',

        duration: 1500

      })

    } else {

      wx.request({

        url: app.globalData.apiurl + '/api/user/insertfeedback.html',

        header: {

          "Content-Type": "application/x-www-form-urlencoded"

        },

        method: "POST",

        data: { content: e.detail.value.content },

        success: function (res) {

          if (res.data.code == 0) {

            wx.showToast({

              title: that.data.config.feedback_5,

              icon: 'none',

              duration: 1500

            })

          } else {

            wx.showToast({

              title: '111',//这里打印出登录成功

              icon: 'success',

              duration: 1000

            })

          }

        }

      })

    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    isShow: (options.isShow == "true" ? true : false)
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

  },
  /**
  * 设置开始时间
  */
  setStartTime: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  /**
  * 设置结束时间
  */
  setEndTime: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  //选择文件
  chooseImages: function () {
    var that = this;
    wx.chooseImage({
      count: 3,  //最多可以选择的图片总数  
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sizeType: ['original', 'compressed'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths[0];
        wx.uploadFile({
          url: app.globalData.apiurl + '/api/index/wxupload.html',
          filePath: tempFilePaths,
          name: 'images',
          formData: {
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            var paths = that.data.upimages;
            paths = data.path;
            if (data.code == 200) {
              that.setData({
                upimages: paths
              });
            } else {
              wx.showToast({
                title: "上传失败",
              });
            }

          },
          fail: function (res) {
            wx.showToast({
              title: "上传失败",
            });
          }
        })
        console.log(res)
      },
    })
  },
  jj_input: function (e) {
    this.setData({
      jj_num: e.detail.cursor
    });

  },
})