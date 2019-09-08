// pages/follow/follow.js
import douban from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '数据加载中',//页面第一次渲染用到的值
    type: 'in_theaters',
    list: [
      // {id:'', image: '', title: '', average: 4.3, original_title: '', year: '', directors:''}
    ],
    board: [
      { id: '1', image: 'https://img12.static.yhbimg.com/goodsimg/2019/07/29/09/02706a82e1c5f28b430cd565d607e3fb20.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '西服男' ,
        tit: 'gxg夏日短款男装', laber: '满包邮', price:'¥699.00'
      },
      { id: '2', image: 'https://img12.static.yhbimg.com/goodsimg/2019/07/08/14/0218eede9d21092b3152151722599cd910.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '牛仔男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥123.00'
       },
      { id: '3', image: 'https://img10.static.yhbimg.com/goodsimg/2019/08/14/09/012bf784f53c7d21d6ed3f826e7b1ee17f.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '女装男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥451.00'
       },
      { id: '4', image: 'https://img10.static.yhbimg.com/goodsimg/2019/08/20/15/01e4737783946644dcbd32779e0687707b.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '袜子男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥464.00'
       },
      { id: '5', image: 'https://img13.static.yhbimg.com/goodsimg/2019/08/21/16/0217428fc0937d143a814395bb3d8be46e.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '卫衣男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥991.00'
       },
      { id: '6', image: 'https://img11.static.yhbimg.com/goodsimg/2019/08/22/16/011298d5f6b3749faa9ad44fe682f6edd2.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '连帽衫男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥182.00'
       },
      { id: '7', image: 'https://img13.static.yhbimg.com/goodsimg/2019/08/20/13/02f5d9cf88c4f1a44f4ab1e0e946d9c542.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '大衣男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥789.00'
       },
      { id: '8', image: 'https://img10.static.yhbimg.com/goodsimg/2019/07/19/15/015b3eff53f5376af410e56b4aa915bfde.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '格子衫男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥342.00'
       },
      { id: '9', image: 'https://img11.static.yhbimg.com/goodsimg/2019/07/10/14/019be54bafe2d2b74dc1512347f2dc2a63.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '内衣男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥78.00'
       },
      { id: '10', image: 'https://img12.static.yhbimg.com/goodsimg/2019/08/06/18/02d0759470112a4e4eedd6deade77eaca5.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', titel: '风衣男',
        tit: 'gxg夏日短款男装', laber: '满包邮', price: '¥1567.00'
       },
      // { key: 'us_box', title: '北美票房榜' }  数据格式有误
    ] 
  },
  showToast(){
    wx.showToast({
       title:'成功',
       icon:'success',
       duration:1000,
       mask:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.title = options.title || this.data.title
    // 类型： in_theaters  coming_soon  us_box
    this.data.type = options.key || this.data.type
    this.loadList();
  },
  loadList() {
    douban({
      url: '/v2/movie/' + this.data.type,
      data: {
        count: 10,
        start: 0
      },
      loading: true
    }).then(
      res => {
        if (!res.data.subjects) return;
        let result = [];
        res.data.subjects.map((item) => {
          result.push({
            image: item.images.small,
            id: item.id,
            title: item.title,
            average: item.rating.average,
            original_title: item.original_title,
            year: item.year,
            directors: item.directors[0].name
          })
        });
        this.setData({
          list: result,
          title: res.data.title//渲染list时需要在渲染一次title
        });
      }
    )
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