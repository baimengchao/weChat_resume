var app = getApp();
// pages/components/personInfo/personInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    app: app.data
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* 联系我方法 */
    callMe: function(){
      var _this = this;
      wx.makePhoneCall({
        phoneNumber: _this.data.app.phone
      })
    },
    /* 添加通讯录方法 */
    addPhone: function(){
      var _this = this;
      wx.addPhoneContact({
        firstName: _this.data.app.name,
        mobilePhoneNumber: _this.data.app.phone,
        email: _this.data.app.email
      })
    }
  }
})
