console.log( isNaN(NaN) );//true

console.log( isNaN('Hello') );//true

console.log( isNaN('2006/12/16') );//true

console.log( isNaN(Array) );//true
console.log( isNaN(Function) );//true
console.log( isNaN(Object) );//true

console.log( isNaN(undefined) );//true
console.log( isNaN(null) );//false

console.log( isNaN('123') );//false
console.log( isNaN(123) );//false
console.log( isNaN(1.23) );//false
console.log( isNaN(-123) );//false
console.log( isNaN(0) );//false
console.log( isNaN(Infinity) );//false

console.log( isNaN(true) );//false
console.log( isNaN(false) );//false




