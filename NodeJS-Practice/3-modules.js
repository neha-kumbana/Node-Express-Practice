//CommonJS, every file is a module by default
//Modules - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-mind-grenade')  // if there's a function within the module runs even though we did not use exports and we did not invoke the variable
console.log(names)
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)