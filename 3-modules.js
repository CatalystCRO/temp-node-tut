//CommonJS, every file is module(by default)
//Modules - Encapsulated code (only share minimum)


const names = require('./4-names') //this is so we can use variables from 4-names.js
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Andrej')
sayHi(names.john)
sayHi(names.peter)