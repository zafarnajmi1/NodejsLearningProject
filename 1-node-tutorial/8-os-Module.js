const OS = require('os')

const user = OS.userInfo()
console.log(user)
// method returns the system uptime in second

console.log(`the system uptime is ${OS.uptime()} seconds`)
const currentOS = {
    name:OS.type(),
    relase:OS.release(),
    totalmemory: OS.totalmem(),
    freeMem: OS.freemem()
}

console.log(currentOS)