// pages/Post.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:''
  },

  // 1. 监听输入框打字：每次用户打字，把字更新到 inputText 里
  onInput(e){
    this.setData({
      inputText:e.detail.value
    })
  },

  // 2.点击发布按钮：把抓到的文字打印在控制台上
  submitPost(){

    const content = this.data.inputText;

    if(!content.trim()){
      wx.showToast({
        title:'写点什么再发布吧～',
        icon:'none'
      })
      return
    }

    wx.showLoading({ title: '发布中' });
    db.collection('posts').add({
      data:{
        content:content,
        createTime: new Date()
      }
    }).then(res=>{
      wx.hideLoading();
      this.setData({inputText:''});
    }).catch(err=>{
      wx.hideLoading();
      console.error("数据库错误为：",err);
    })

    console.log('后台捕获成功，用户输入的是：',content)
    }
})