const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("Hello Pakistan2")
/////////////////////////////////////////////////////
const { readFile ,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const eventEmmiter = require('events')
const customEmitter = new eventEmmiter()
customEmitter.on('response', () => {
  console.log(`recieved data`)
})


customEmitter.emit('response')