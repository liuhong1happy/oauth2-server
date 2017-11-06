var net = require('net')

// 检测端口是否被占用
module.exports.portIsOccupied = function (port) {
  return new Promise((resolve, reject)=>{
    try {
      var server = net.createServer().listen(port)
    
      server.on('listening', function () { // 执行这块代码说明端口未被占用
        server.close() // 关闭服务
        resolve(true);
      })
    
      server.on('error', function (err) {
        if (err.code === 'EADDRINUSE') { // 端口已经被使用
          resolve(false);
        }
      })
    } catch(err) {
      reject(err);
    }
  })
}