// pages/change/chaneg.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    num:0.0,
    state:'',
    date:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      name:app.globalData.changename,
      state:app.globalData.changestate,
      num:app.globalData.changenum,
      date:app.globalData.changedate
    })
    console.log('change',this.date)
  },
  commit(){
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
            // 用户点击了确定 可以调用删除方法了
            wx.cloud.database().collection('product').doc(app.globalData.changeid).remove({
              success: function(res) {
                console.log(res.data)
              }
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
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
    this.setData({
      name:app.globalData.changename,
      state:app.globalData.changestate,
      num:app.globalData.changenum,
      date:app.globalData.changedate
    })
    console.log('change',app.globalData.changenum)
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