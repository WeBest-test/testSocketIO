#SecChat
Node.js+Socket.io+CryptoJS（AES）实现的简易聊天网站。  
目前会丢失消息 也没有数据库。但是，安全。  
（请自行修改AES的salt的计算方法，现在是每天更换一次，所以，仍然有一些不太安全的地方，更多逻辑待添加）  


##经过少许修改后 可被部署在[百度云BAE](https://bce.baidu.com/product/bae.html)，  
修改要点：
listen端口号写18080 
需要购买附加的port服务 网页端js的io的地址指向购买的port，服务器端仍然使用18080 （这样websocket才会内外互通）  

##原本是一个socket.io测试项目
express-generator生成的express项目结构，添加了less handlehars支持。
http://socket.io/get-started/chat/ 的教程

使用opn打开浏览器，supervisor待用。

##socket.io学习指南
socket.io的文档和engine.io的文档 一定要 都看！  
[socket.io官网文档](http://socket.io/docs/)  
[socket.io github文档](https://github.com/socketio/socket.io#socketio)  
[engine.io github文档](https://github.com/socketio/engine.io#engineio-the-realtime-engine)
  
####增加了CryptoJS
传输中使用AES加密。

####TODO
昵称显示/背景色颜色区分 方便标识同一个用户  
localStorage 可查看之前的几条记录  
消息队列 防止丢失信息  
更及时的salt交换方式（现在是每24小时改变）  
模块化（现在的主要逻辑都在www里面）