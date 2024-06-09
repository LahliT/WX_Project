// pages/pre_select/pre_select.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlPath: "../selectResult/selectResult",
    // goods_inList待展示的列表数据内容
    goods_inList:[],
  },
  search(){
    if(app.globalData.target.length!=0){
    wx.navigateTo({ url:'/pages/selectResult/selectResult'})}
    else{
      wx.showToast({
        icon:'none',
        title: '请输入查询产品',
      })
    }
    console.log('here')
  },
  getname(e){
    app.globalData.target=e.detail.value
    console.log('app.globalData.target',app.globalData.target)
  },

  // getGoodsInList是用于获取列表数据内容的函数 并将获取到的数据保存到本地缓存
  getGoodsInList:function(){
    // 将变量data的数据赋值给goods_inList
    wx.cloud.database().collection('product').where({
      name:app.globalData.thename
    })
    .get()
    .then(res=>{
      console.log(res.data)
      this.setData({
        goods_inList:res.data
      })
    })
    .catch(res=>{
      console.log('error')
    })
  },
  jump(e){
    console.log('jump')
    app.globalData.changename=e.currentTarget.dataset.goodsinname
    app.globalData.changenum=e.currentTarget.dataset.goodsnum*1
    app.globalData.changedate=e.currentTarget.dataset.goodsdate
    app.globalData.changestate=e.currentTarget.dataset.goodsstate
    app.globalData.changeid=e.currentTarget.dataset.goodsid
    console.log(e.currentTarget.dataset.goodsid)
    wx.switchTab({ url: '/pages/change/chaneg'})
  },
  /*success(res){
    console.log(res.data)
    this.setData({
      goods_inList:res.data
    });
    console.log('here')
    // 将goods_inList保存到本地缓存
    /*try{
      wx.setStorageSync('goods_inList', data)
      // console.log('保存数据到缓存成功')
    }catch (e) {
      // console.log('保存数据到缓存发生错误')
    }*/
  /*},
  fail(res){
    wx.showToast({
      icon:'none',
      title: 'ERROR',
    })
  }*/

  // 获取选中项的信息并保存到本地缓存
  /*getselectdata(e){
    console.log("e",e);
    // 将选中项的信息保存到本地缓存
    try{
      wx.setStorageSync('selected_goods', e.currentTarget.dataset)
      console.log('保存数据到缓存成功')
    }catch (e) {
      console.log('保存数据到缓存发生错误')
    }
    wx.showToast({
      title: '选中成功',
      icon: 'success',
      duration: 2000,
      success:(res)=>{
        console.log("选中成功");
        // 选中成功后跳转到指定的页面
        // wx.redirectTo({
        //   url: '/pages/chuku/chuku',
        // })
      }
    })
  },*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // getGoodsInList是用于获取列表数据内容的函数
    this.getGoodsInList();
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
    this.getGoodsInList();
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
