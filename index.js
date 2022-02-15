
const http = require("http")
const port = 3000
const  server = http.createServer(function(red,res){

})
server.listen(port,function(error){
if (error){
  console.log('something is wrong' + error)
} else {
  console.log('server is listing on Port :' + port) 
}
})



