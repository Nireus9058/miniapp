// pages/detail/detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    title:'',
    imgUrls: [
      'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/454291526/O1CN01Uyn1UK1N8wwk512RV_!!454291526.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/454291526/O1CN01NAN6RN1N8wwuMhzxo_!!454291526.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/454291526/O1CN01mDjciz1N8wwrh5DjV_!!454291526.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/454291526/O1CN01w9RiVi1N8wwrh3Cyn_!!454291526.jpg_430x430q90.jpg',
    ],
    index: 0,
    Height: "" ,  
   },

  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;
    var imgh = e.detail.height;
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({ Height: swiperH })
  },
  navigator(){
    wx.switchTab({
      url:'/pages/home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log('item',options)
    wx.setNavigationBarTitle({
      title: options.titel + '-GxGjeans'
    })
  
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {


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