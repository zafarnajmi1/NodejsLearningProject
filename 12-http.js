const http = require('http')
const server = http.createServer((req,res) => {
    //console.log(req)

    if (req.url === '/'){
      res.end('Welcome To Home Page')  
    }

if (req.url === '/about'){
    res.end('Here is the our short History')

}


res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the you are looking for</p>
    <a href="/"> back home </a>`)

// res.write('Welcome To Home Page') //write('Welcome To Home Page')
// res.end()
})

server.listen(5500)