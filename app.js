// app.js
App({
  onLaunch(){
    wx.cloud.init({
      env:'killerqueen-1gsvqnpfbd62ee79'
    })
  },
  globalData: {
      thename:"",
      theshow:false,//等会改false
      target:'',
      changename:'',
      changenum:0,
      changestate:'',
      changedate:'',
      changeid:''
  }
})
