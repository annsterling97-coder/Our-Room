// pages/index/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.fetchPosts()
  },

  fetchPosts(){
    wx.showLoading({title:'加载中...'})

    db.collection('posts')
      .orderBy('createTime','desc')
      .get()
      .then(res => {
        const list = res.data.map(item => {
          const date = new Date(item.createTime)
          item.displayTime = `${date.getMonth()+1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}`
          return item
        })
        this.setData({
          postList: list
        })
        wx.hideLoading()
      })
      .catch(err=>{
        console.error("读取失败",err)
        wx.hideLoading()

      })
  },

  goToPost(){
    wx.navigateTo({
      url:'/pages/post/post'
    })
  }
  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom() {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage() {

  // }
})