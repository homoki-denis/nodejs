//==========================

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

//===========================

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative");

require("./mind-grenade");
sayHi(names.denis);
sayHi(names.patri);
sayHi("Gabi");

console.log(data);
