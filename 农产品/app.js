// app.js
App({
  onLaunch(){
    wx.cloud.init({
      env:'killerqueen-7gsfdzaw933c7f7c'
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
      changeid:'',
      thelocal:''
  }
})
