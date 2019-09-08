// pages/home/home.js
import douban from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
   
    imgUrls: [
 {image:'http://img.hb.aicdn.com/b9f6a931ada88e1c5a83bdf5132764a1c53c8d8adf615-JmiE27_fw658'},
 {image: 'https://img.zcool.cn/community/0182b757b2b51b0000012e7ed76b6d.jpg@1280w_1l_2o_100sh.jpg'},
 {image: 'https://img.zcool.cn/community/01ecc55829317ca84a0d304fe1693d.jpg@1280w_1l_2o_100sh.jpg'},
 {image: 'https://img.zcool.cn/community/01a90758bd4416a801219c77039e9c.jpg@1280w_1l_2o_100sh.jpg'}, 
 {image: 'https://img.zcool.cn/community/018d725829317ba84a0d304f5a4cc5.jpg@2o.jpg'},
 {image:'http://img.hb.aicdn.com/689f5fd75025a26a381eeb79cd6bfab0a53a39bb2028f-HUSfLZ_fw658'},
 {image:'http://img.hb.aicdn.com/2201e4c1731d18ed2d43676383f03c3c2b533a65420ed-8vzA4m_fw658'
      }],
    index:0,
    banner: {
      key: 'in_theaters',
      title: '正在热映',
      content: [
        // {image:'',id:xx}
      ]
    },
    board: [
      { id: '1', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443567812&di=b36f897e4a30085dc6bb01a9a43c5b2f&imgtype=0&src=http%3A%2F%2F0.image.al.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20171027%2Ffab7bb9530f12806777b841cace9f88d.jpg',titel:'西服男'},
      { id: '2', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443571814&di=be361b8a243686897dd235b892cdfbf9&imgtype=0&src=http%3A%2F%2F0.image.kw.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20180322%2Fd4397f9854dd06255cd42d6e18258367.jpg', titel: '牛仔男' },
      { id: '3', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443601519&di=481a859b1227ba8c5e59e7ee35529627&imgtype=0&src=http%3A%2F%2F0.image.al.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20171025%2Facc57358cd649a95cba8c6e745614ef2.jpg', titel: '女装男' },
      { id: '4', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443614954&di=ea3acdc60039c7d595c67a0a691f12cb&imgtype=0&src=http%3A%2F%2F0.image.al.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20171027%2F5811afb7bce2f3bc541ca8b1b1f65786.jpg', titel: '袜子男' },
      { id: '5', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443620913&di=09760523837bc24e4f3c585f42063dab&imgtype=0&src=http%3A%2F%2F0.image.kw.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20180322%2Fc82a4d7b11427d2cffb31d27c7011d2d.jpg', titel: '卫衣男' },
      { id: '6', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443740342&di=5696cb8f122274f3580c0e044cdaa9e1&imgtype=0&src=http%3A%2F%2F0.image.kw.okbuycdn.com%2Fimages%2Fmultipic%2F4%2F20180322%2F8f8d17f0ac21e24787db87f5ab9907db.jpg', titel: '连帽衫男' },
      { id: '7', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443708512&di=72b4384dd885ddd6b77f832c0f438eeb&imgtype=0&src=http%3A%2F%2Fz3.tuanimg.com%2Fimagev2%2Ftrade%2F790x1148.eee121b1435b67757c2a3e33118010f7.790x.jpg', titel: '大衣男' },
      { id: '8', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567443698899&di=9c28fd69a3115d988de7899a7bf870c1&imgtype=0&src=http%3A%2F%2Fz2.tuanimg.com%2Fimagev2%2Ftrade%2F790x1148.a2a608fcff53930cd3e76972a2cb4dd8.790x.jpg', titel: '格子衫男' },
      // { key: 'us_box', title: '北美票房榜' }  数据格式有误
    ]
  },
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;
    var imgh = e.detail.height;
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({ Height: swiperH })
  },
  onSearch() {

  },
  onCancel() {

  },
  previewImage() {
    wx.previewImage({
      current: 'http://img.52z.com/upload/news/image/20180122/20180122093427_87666.jpg', // 当前显示图片的http链接
      urls: ['https://img11.static.yhbimg.com/goodsimg/2019/07/22/13/01384dc3d1d0314574c2442b66492b957c.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80',
        'https://img12.static.yhbimg.com/goodsimg/2019/08/08/13/023357339868b9d730b5088f949ef91665.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80',
        'https://img12.static.yhbimg.com/goodsimg/2019/08/20/10/021427a88440c2697ae884ce349376e14b.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80',
        'https://img13.static.yhbimg.com/goodsimg/2019/08/08/14/02eb241352411340d06ebae6c26e96c25f.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80',
        'https://img11.static.yhbimg.com/goodsimg/2019/08/07/09/0108fe6f2d726deff36481fc80faeb7fa2.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80'
      ] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    douban({
      url: '/v2/movie/' + this.data.banner.key,
      data: { count: 7 }
    }).then(
      res => {
        if (!res.data.subjects) return;
        let result = [];
        res.data.subjects.map((item) => {
          result.push({
            image: item.images.large,
            id: item.id
          })
        });
        this.setData({
          'banner.content': result
          // banner:{
          //   content:result
          // }
        });
        // console.log(this.data.banner.content);
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