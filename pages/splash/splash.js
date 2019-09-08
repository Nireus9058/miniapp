import douban from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { image:'http://img1.gtimg.com/0/62/6217/621712_1200x1000_0.jpg',id:1},
      { image: 'https://p1.ssl.qhimg.com/t01e54275bbbe07722e.jpg', id: 2 },
      { image: 'http://company.ef360.com/EditManager/File/company/201607/201607251053122344_1041x798.jpg', id: 3 },
      { image: 'http://img2.efu.com.cn/upfile4/2017/2017-03-30/b8125885-776a-48fd-9e12-4a3b452f2c93.jpg', id: 4 },
      { image: 'http://www.linkshop.com.cn/upload/article/2019/20190116133124_8678_lssize.jpg', id: 5 },

      // {image:'',id:xx}
    ]
  },
  clickHandler(){
    wx.switchTab({
      url:'/pages/home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.setStorageSync('douban_movie')
   if(res){
     wx.switchTab({
       url: '/pages/home/home'
     })
     return;
   }
     //写入storage
    wx.setStorageSync('douban_movie', true)
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