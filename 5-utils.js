const sayHi = (name) =>{     //we want to share these, so we use module.exports (line 5)
    console.log(`Hello there ${name}`)
}

module.exports = sayHi