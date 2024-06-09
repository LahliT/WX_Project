const app=getApp()
// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    pwd:'',
    local:'',
    alreadyuser:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  getlocal(e){
    this.setData({
      local:e.detail.value
    })
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
    wx.cloud.database().collection('user').field({
      name:true
    })
    .get()
    .then(res=>{
      this.setData({
        alreadyuser:res.data
      })
      console.log('setdata',this.data.alreadyuser)
    })
    .catch(res=>{
      console.log('error',res)
    })
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
  commit(e){
    let name=this.data.name
    let id=this.data.id
    let pwd=this.data.pwd
    let local=this.data.local
    var app=getApp()
    if(name.length<2){
      wx.showToast({
        icon:'none',
        title: '姓名最少为两位',
      })
      return
    }
    if(pwd.length<6){
      wx.showToast({
        icon:'none',
        title: '密码最少为6位',
      })
      return
    }
    
    console.log('for',this.data.alreadyuser)
    for (var i = 0; i < this.data.alreadyuser.length; i++) {
      console.log('name',name,'alreadyuser',this.data.alreadyuser[i].name)
      if(name==this.data.alreadyuser[i].name){
        console.log('name',name,'alreadyuser',this.data.alreadyuser[i].name)
        wx.showToast({
          icon:'none',
          title: '该用户名已存在',
        })
        return
      }
    }
    wx.cloud.database().collection('user').add({
      data:{
        name:name,
        pwd:pwd,
        local:local
      },
      success(res){
        wx.showToast({
          title: '注册成功',
        }),
        app.globalData.thename=name
        app.globalData.theshow=true
        app.globalData.thelocal=local
        wx.switchTab({ url: '/pages/mine/mine'})
      },
      fail(res){
        wx.showToast({
          title: '失败请重试',
        })
      }
    })
  }
})