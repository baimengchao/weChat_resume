//app.js
App({
  data: {
    name:'白梦超',  //姓名
    post: '前端开发', //职务
    sex: '男',  //性别
    age: '28',  //年龄
    phone: '18513458154',  //电话
    email: '1479512156@qq.com',  //邮箱
    work_age: '3年' //工龄
  },
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})