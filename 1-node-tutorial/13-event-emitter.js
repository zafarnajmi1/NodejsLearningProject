const EventEmmiter = require('events')
const customEmitter = new EventEmmiter()

customEmitter.on('response', (name , id ) => {
  console.log(`recieved data user name ${name}, id ${id}`)
}) 

customEmitter.on('response', () => {
  console.log(`some other Logic here`)
})

customEmitter.emit('response','David',34)