## 缓存策略

https://camo.githubusercontent.com/df822872ee2a8aef44c665f8fffd13c4cc4eb637bd8706ce4899e8eb72d2a431/687474703a2f2f696d672d7374617469632e796964656e6778756574616e672e636f6d2f77786170702f69737375652d696d672f7169642d382e706e67
1. 强缓存
2. 协商缓存


强缓存：浏览器在Expires: ，Cache-Control: max-age有效期间，直接使用本地缓存不发起新的请求
协商缓存：浏览器会带上if-none-match(etag)或者if-modified-since (last-modified)请求服务器，如果缓存还在有效期
etag、last-modified是响应头数据
if-none-match、if-modified-since是请求头数据