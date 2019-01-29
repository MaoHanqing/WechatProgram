// logs/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    // wx.navigateBack({
    //   delta:1
    // })
    this.refreshSucess()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  showToast: function() {
    wx.showToast({
      title: '成功',
      icon: 'success',
    })
  },
  hideToast: function() {
    wx.hideToast()
  },
  showLoading: function() {
    wx.showLoading({
      title: 'jiazai',
      mask: true,
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ['a', 'b', 'c'],
      itemColor: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  showNavigationBarLoading: function() {
    wx.showNavigationBarLoading()

    setTimeout(function() {
      wx.hideNavigationBarLoading({
        complete: function(){
          wx.setNavigationBarTitle({
            title: '新名字',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      })
    }, 2000)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  refreshSucess: function () {
    setTimeout(function () {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#4289f4',
      })
      wx.stopPullDownRefresh()
    }, 2000)
   
  },
  pullRefresh: function () {
    const that = this 
    wx.startPullDownRefresh({
      success: function(res) {
        that.refreshSucess()
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    
  },
})