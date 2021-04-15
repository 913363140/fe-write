const http = require('http')

const server = http.createServer((req, res) => {
  res.write('hello world!, start with' + process.pid)
  res.end()
})

server.listen(3000, () => {
  console.log('server start at : http://127.0.0.1:3000')
})

console.log(`Worker ${process.pid} started`)