let app = getApp();
export default ({ url, data, loading, navLoading }) => new Promise(
  (resolve, reject) => {

    if (loading) {
      wx.showLoading({
        title: '加载中',
      });
    }

    if (navLoading) {
      wx.showNavigationBarLoading()
    }

    wx.request({
      url: app.globalData.baseUrl + url,
      data: data,
      method: 'GET',
      header: {
        "Content-Type": "json"  //豆瓣要改成JSON
      },
      success: (res) => {
        loading && wx.hideLoading();
        navLoading && wx.hideNavigationBarLoading();
        resolve(res);
      },
      fail: (err) => {
        loading && wx.hideLoading();
        navLoading && wx.hideNavigationBarLoading();
        reject(err)
      }
    })

  }
)