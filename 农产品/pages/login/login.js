// pages/login/login.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    pwd:""
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

  },
  getname(e){
    this.setData({
      name:e.detail.value
    })
  },
  getpwd(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  log1: function(){ wx.navigateTo({ url:'/pages/log/log'})},
  commit(e){
    let name=this.data.name
    let pwd=this.data.pwd
    if(name==""||pwd==""){
      wx.showToast({
        icon:'none',
        title: '输入框不能为空',
      })
      return
    }
    wx.cloud.database().collection('user').where({
      name:name
    }).get({
      success(res){
        console.log(res)
        if(res.data.length==0){
          wx.showToast({
            icon:'none',
            title: '未注册',
          })
          return
        }
        let user=res.data[0]
        var app=getApp()
        if(user.pwd==pwd){
          app.globalData.thename=name
          app.globalData.theshow=true
          
          wx.switchTab({ url:'../../pages/mine/mine'})
          console.log(app.globalData.thename)
        }
        else{
          wx.showToast({
            icon:'none',
            title: '密码错误',
          })
          return
        }
      },
      fail(res){
        wx.showToast({
          icon:'none',
          title: 'ERROR',
        })
      }
    })
  }
})