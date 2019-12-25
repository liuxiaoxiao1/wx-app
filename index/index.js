const app = getApp()

Page({
  data: {

  },
  click: function() {
    // 选择图片

    wx.chooseImage({

      count: 1, // 默认9

      sourceType: ['album', 'camera'],

      // 可以指定来源是相册还是相机，默认二者都有

      success: function(res) { 
        setTimeout(function(){
          wx.showLoading({

            title: '上传中...',

            success: function (res) {
              console.log("showLoading success", res)
            },
            fail: function (res) {
              console.log("showLoading fail", res)
            },
          })
        },500)
       

      }

    })
  },
  onLoad: function() {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})