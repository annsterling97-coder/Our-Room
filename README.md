<<<<<<< HEAD
# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

=======
# Our-Room
一间我们的房间小程序代码仓库。
>>>>>>> 6149ca8234e30ab74968be5918736db21e3e46ce

### cloudfunctions 云端运行的后端代码

## quickstartFunctions
# config.json 表示当前项目申请使用的微信开放接口"wxacode.get"（生成小程序二维码）
对象{} 数组[] 键值对：
# index.js 初始化云环境 获取用户id 生成二维码 创建数据库 查询数据 更新数据 插入数据 删除数据
# package.json 这个文件就是:一个 Node.js（云函数）项目的“配置清单”，告诉系统入口文件是 index.js，并需要使用微信云开发 SDK（wx-server-sdk）

### miniprogram 前端代码（用户看到和交互的部分）

## components 组件
# cloudTipModal（完整的自定义弹窗组件）
- index.js 微信小程序自定义弹窗组件，通过 properties 接收外部控制，用 observers 同步状态，用 methods 控制关闭行为（运作方式）
- index.json 用来声明这个 .js + wxml + wxss 是一个“组件”，而不是小程序页面（基础信息）
- index.wxml 通用的提示弹窗组件（构成元素）
- index.wxss 为提示弹窗组件（.wxml）提供视觉样式

## images 图像
# icons 用来存放所有自定义图标图片的文件夹
- customer-service，question，setting，share，arrow，copy：各种图标

## pages 存放所有页面的文件夹
# example 云开发功能演示页面
- index.js: 微信小程序云开发快速启动示例的页面逻辑文件，展示了云开发的各种核心功能
- index.json: 微信小程序的页面配置文件（.json 文件），用于注册和引入自定义组件
- index.wxml: 微信小程序云开发示例页面的模板文件（.wxml），根据不同的 type 参数展示不同的功能演示
获取open ID 生成小程序码 创建数据库集合 数据库操作 文件上传 AI组建集成 云托管 AI助手
- index.wxss：全局样式文件
# index 云开发功能导航页面
- index.js:微信小程序云开发功能导航页面的逻辑文件，提供了一个分类展示云开发各项能力的入口界面
- index.json: 微信小程序页面的配置文件，用于配置当前页面的导航栏和引入组件
- index.wxml: 微信小程序云开发功能导航页面的模板文件，实现了一个可折叠的功能列表，用于展示和导航到各种云开发能力
- index.wxss: 微信小程序云开发功能导航页面的样式文件，为可折叠功能列表提供了完整的视觉设计

## app.js 微信小程序的全局入口文件，负责初始化整个应用程序和云开发环境
## app.json 微信小程序的全局配置文件，用于配置整个小程序的页面路径、窗口样式和其他全局设置
## app.wxss 微信小程序的全局样式文件，定义了整个应用中所有页面的通用样式 (app.wxml 不存在，因为小程序不需要全局的页面结构)
## envList.js 微信小程序云开发环境配置文件，用于管理和导出环境配置信息
## sitemap.json 微信小程序的站点地图配置文件，用于配置小程序的搜索收录规则

### uploadCloudFunction 云函数部署命令，用于将 quickstartFunctions 云函数部署到微信云开发环境
