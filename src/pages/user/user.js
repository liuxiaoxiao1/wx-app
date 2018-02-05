
var app = getApp();
Page({
  data:{
    userInfo: app.appData.userInfo
  },
  onLoad:function(options){
    if (app.appData.userInfo == null ){
     // wx.navigateTo({url:"../login/login"})

        wx.redirectTo({url:"../login/login"})
    }else{

      this.setData({ userInfo: app.appData.userInfo})


    }


  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})