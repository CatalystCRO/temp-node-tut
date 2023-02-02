/*event loop = is what allows Node.js to perform non-blocking input/output operations - 
despite the fact that JavaScript is single threaded - by offloading operations to the system
kernel whenever possible

*/

const {readFile} = require('fs')

console.log('started a first task')
//CHECH FILE PATH
readFile('../content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')
console.log('it works')