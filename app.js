const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("Hello Pakistan2")
/////////////////////////////////////////////////////
// const http = require('http')
// const server = http.createServer()
// server.on('request',(req,res) => {
//   res.end('welcome')
// })
// server.listen(5000)

////////////////////////////

const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req.method)
    const url = req.url

    if (url === '/') {
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>Home Page</h1>')
            res.end()
    }
     else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
     } 
     else {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Page not Found</h1>')
        res.end()
     }
})
server.listen(5000)