// pages/contactMe/contactMe.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    app: app.data,
    scale: 9,   //地图缩放比例
    latitude: 39.90400,   //地图中心纬度
    longitude: 116.3980,   //地图中心经度
    markers:[               //地图标记点
      {
        id:1,
        latitude: 39.90400,
        longitude: 116.3980,
        title: '我的位置',
        iconPath: '/images/ico.png',
        alpha: 1,
        width: 25,
        height: 25,
        callout: {
          content:'北京',
          color: "#000",
          fontSize: 14,
          borderRadius: 6,
          bgColor: "#eee",
          padding: 4,
          display:'ALWAYS',
          textAlign:'center'
        }
      },
      {
        id: 1,
        latitude: 39.51000,
        longitude: 116.7050,
        title: '我的位置1',
        iconPath: '/images/ico.png',
        alpha: 1,
        width: 25,
        height: 25,
        label: {
          content: '北京',
          color: "#000",
          fontSize: 12,
          x:0,
          y: 0,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          bgColor: "#eee",
          padding: 4,
          textAlign: 'center'
        }
      }
    ],
    circles: [
      {
      latitude: 39.90400,   
      longitude: 116.3980,   
      color: "#9eea6a55",
      fillColor: "#9eea6a55",
      radius: 20000,
      strokeWidth:0
      },
      {
        latitude: 39.51000,
        longitude: 116.7050,
        color: "#9eea6a55",
        fillColor: "#9eea6a55",
        radius: 14000,
        strokeWidth: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  getPosition: function(){
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})