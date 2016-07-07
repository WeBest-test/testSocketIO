#socket.io测试项目
express-generator生成的express项目结构，添加了less handlehars支持。
http://socket.io/get-started/chat/ 的教程

使用opn打开浏览器，supervisor待用。

##socket.io学习指南
socket.io的文档和engine.io的文档 一定要 都看！  
[socket.io官网文档](http://socket.io/docs/)  
[socket.io github文档](https://github.com/socketio/socket.io#socketio)  
[engine.io github文档](https://github.com/socketio/engine.io#engineio-the-realtime-engine)
  
###增加了CryptoJS
传输中使用AES加密。

###TODO
昵称显示/背景色颜色区分 方便标识同一个用户  
localStorage 可查看之前的几条记录  
消息队列 防止丢失信息 