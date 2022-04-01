const http = require('http')
const server  = http.createServer((req,res)=> {
    console.log('request event')
    res.end('hello World')
})

server.listen(500,() => {
    console.log('server listening on port 5000.....')
})