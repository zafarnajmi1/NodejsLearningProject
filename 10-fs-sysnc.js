const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the reult :${first},${second}`,
{flag:'a'}
)
console.log('doen with this task')
console.log('start with next one')