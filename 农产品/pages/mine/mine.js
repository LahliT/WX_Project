const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    login: {
      show: false,
      avatar: '/pages/images/随机用户.png',
      username:'',
      userlocal:''
    }
  },
  // 登录监听
  /*chooseAvatar(e) {
    this.setData({
      login: {
        show:true,
        avatar: e.detail.avatarUrl,
      }
    })
    app.setData
  },*/
  // 基本信息
  loglog: function(){ 
    wx.navigateTo({ url:'/pages/login/login'})
    /*this.setData({
      login: {
        show: true,
        avatar: '/pages/images/随机用户.png',
        username:app.globalData.thename
      }
    })*/
  },
  // 退出监听
  exitClick() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            login: {
              show: false,
              avatar: '/pages/images/随机用户.png',
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      login: {
        username:app.globalData.thename,
        show:app.globalData.theshow
      }
    })
    if(this.data.login.show){
      this.setData({
        login: {
          avatar: '/pages/images/头像3.png'
        }
      })
      wx.cloud.database().collection('user').where({
        name:app.globalData.thename
      })
      .get()
      .then(res=>{
        console.log('mineres',res.data[0].local)
        this.setData({
          userlocal:res.data[0].local
        })
      })
      .catch(res=>{ console.log('fail')})
  }
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
    this.setData({
      login: {
        username:app.globalData.thename,
        show:app.globalData.theshow
      }
    })
    if(this.data.login.show){
    /* this.setData({
        login: {
          username:app.globalData.thename,
          show:app.globalData.theshow,
          avatar: '/pages/images/头像3.png'
        }
      })*/
      wx.cloud.database().collection('user').where({
        name:app.globalData.thename
      })
      .get()
      .then(res=>{
        console.log('mineresshow',res.data[0].local)
        this.setData({
          login: {
          userlocal:res.data[0].local,
          username:app.globalData.thename,
          show:app.globalData.theshow,
          avatar: '/pages/images/头像3.png'
        }
        })
        console.log('now',this.data.login.userlocal)
      })
      .catch(res=>{ console.log('fail')})
    }
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
