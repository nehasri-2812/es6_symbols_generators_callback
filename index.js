// 1. Create an object where two properties are defined using unique Symbols. 
// Demonstrate how you can access them and show that they do not conflict with each 
// other even if they have the same description. 

let s1 = Symbol("id")
let s2 = Symbol("id")
// console.log(s1===s2)

const user = {
  [s1]: "Neha",
  [s2]: "Teja"
};

console.log(user[s1]); 
console.log(user[s2]); 
console.log(s1 === s2); 


// 2. Create two global symbols with the same key using Symbol.for(). When retrieved 
// from the global symbol registry, show that they are the same symbol and explain the 
// difference between Symbol() and Symbol.for(). 

let sy1 = Symbol.for("user")
let sy2 = Symbol.for("user")
console.log(sy1)
console.log(sy2)
console.log(sy1===sy2)

let sym1 = Symbol("user")
let sym2 = Symbol("user")
console.log(sym1)
console.log(sym2)
console.log(sym1===sym2)

