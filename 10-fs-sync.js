//FS(file system) module allows you to work with the file system on your computer

const {readFileSync,writeFileSync} = require('fs')


console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}. ${second}.`,{flag:'a'}) 
//first part is path,second is value,third part is to append(if we don't have third part,then node will overwrite instead of append)
//if the file is not there,node will create one...if it is there,node will overwrite what's inside
console.log('done with the task')
console.log('starting with the next one')