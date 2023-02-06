//streams are one of the fundamental concepts that power node.js
//they are data handking method and are used to read or write input into output sequentially
//instead of reading file into memory all at once like in traditional way, streams read chunk of data piece by piece,processing its content without keeping it all in memory

const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt',{highWaterMark:9000, encoding:'utf8'}) 
//with highWaterMark:9000 we set size of chunks...this is optional
//encoding is also optional

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>console.log(err))

//size of the buffer is 64kb