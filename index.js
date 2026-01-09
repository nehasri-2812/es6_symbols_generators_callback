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

// 6. Write a generator function that generates an infinite Fibonacci sequence. Use the 
// generator to get the next Fibonacci number and explain how the generator pauses 
// and resumes. 

function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

// 7. Create a generator that combines two separate sequences (e.g., an array of 
// numbers and a Fibonacci sequence) and yields values from both sequences. Ensure 
// that the generator can continue the sequence in a combined manner 

function* combine(arr, fibGen) {
  for (let n of arr) yield n;

  while (true) {
    yield fibGen.next().value;
  }
}

const fibSeq = fibonacci();
let a=[10, 20, 30];
const combined = combine(a, fibSeq);

console.log(combined.next().value); 
console.log(combined.next().value); 
console.log(combined.next().value); 
console.log(combined.next().value); 
console.log(combined.next().value); 
console.log(combined.next().value); 


// 8. Create a generator function that computes the cumulative sum of an array. Return 
// the final sum when the iteration is completed and explain how to access both the 
// yielded values and the return value. 

let arr = [1,2,3];

function * cumSum(a){
  s = 0;
  for(let x of a){
    s += x;
    yield s;
  }
  return s;
}
const obj = cumSum(arr);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());



// 9. Write a function greet that takes a name and a callback function. The function should 
// return a greeting message by calling the callback with the message. 

function greet(name,callback) {
  return callback(name);
}
function sayhello(name) {
  return "hello "+name;
}
console.log(greet("Neha",sayhello))
// 10. Create three functions that take a number, multiply it by 2, subtract 3, and then add 
// 10. Use callbacks to chain these operations together. 

function multiplyBy2(num, callback) {
  callback(num * 2);
}

function subtract3(num, callback) {
  callback(num - 3);
}

function add10(num, callback) {
  callback(num + 10);
}

multiplyBy2(5, result1 => {
  subtract3(result1, result2 => {
    add10(result2, finalResult => {
      console.log(finalResult); // ((5*2)-3)+10 = 17
    });
  });
});

// 11. Write a function delayedMessage(message, delay) that prints the message after the 
// specified delay using setTimeout. Use a callback for when the message has been 
// printed. 
// 12. Create four functions—add, sub, mul, and div—and chain them such that the output 
// of one function is passed as the input to the next function, demonstrating the concept 
// of callback hell.